import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WHATSAPP_NUMBER = "919040458544";
const WhatsAppButton = () => {
  const { t } = useLanguage();
  const message = encodeURIComponent(t("Hi, I'd like to know more about Smilling Odisha's career counseling and social work programs."));

  return <a
    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={t("Chat with us on WhatsApp")}
    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all group"
  >
    <MessageCircle className="h-7 w-7 fill-white stroke-white" />
    {/* Pulse ring */}
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 motion-reduce:hidden" />
    {/* Tooltip */}
    <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
      {t("Chat on WhatsApp")}
    </span>
  </a>;
};

export default WhatsAppButton;
