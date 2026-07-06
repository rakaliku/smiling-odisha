/**
 * Shared form submission utility using Web3Forms.
 *
 * Set your access key in .env:
 *   VITE_WEB3FORMS_KEY=your_access_key_here
 *
 * Get a free key at https://web3forms.com
 */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

interface SubmitFormOptions {
  /** Form data as key-value pairs */
  data: Record<string, string>;
  /** Email subject line */
  subject: string;
}

export async function submitForm({ data, subject }: SubmitFormOptions): Promise<{ success: boolean; message: string }> {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;

  if (!accessKey) {
    console.warn(
      "[submitForm] VITE_WEB3FORMS_KEY is not set. Form submissions will not be delivered. " +
      "Get a free key at https://web3forms.com and add it to your .env file."
    );
    // Still return success so the UI doesn't break during development
    return { success: true, message: "Form submitted (dev mode — no email sent)" };
  }

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        subject,
        from_name: "Smilling Odisha Website",
        ...data,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: result.message || "Form submitted successfully" };
    }

    return { success: false, message: result.message || "Something went wrong. Please try again." };
  } catch (error) {
    console.error("[submitForm] Network error:", error);
    return { success: false, message: "Network error. Please check your connection and try again." };
  }
}
