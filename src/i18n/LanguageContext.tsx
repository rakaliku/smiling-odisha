import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { odiaTranslations } from "./translations";

export type Language = "en" | "or";

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (text: string) => string;
}

const STORAGE_KEY = "smilling-odisha-language";
const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  return window.localStorage.getItem(STORAGE_KEY) === "or" ? "or" : "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.lang = language;
    document.documentElement.dataset.language = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => ({
    language,
    setLanguage,
    toggleLanguage: () => setLanguage((current) => current === "en" ? "or" : "en"),
    t: (text) => language === "or" ? (odiaTranslations[text] ?? text) : text,
  }), [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// The provider and its hook intentionally share this small module.
// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
}
