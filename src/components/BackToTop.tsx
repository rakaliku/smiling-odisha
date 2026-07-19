import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label={t("Back to top")}
      className="fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-warm hover:bg-primary hover:scale-110 transition-all motion-reduce:transition-none"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
};

export default BackToTop;
