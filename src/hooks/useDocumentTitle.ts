import { useEffect } from "react";

/**
 * Sets the document title when the component mounts,
 * and restores the default title on unmount.
 */
const BASE_TITLE = "Smilling Odisha";

export function useDocumentTitle(title: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} — ${BASE_TITLE}` : BASE_TITLE;
    return () => {
      document.title = prev;
    };
  }, [title]);
}
