import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

type Language = "en" | "ko";

type Translations = {
  en: string;
  ko: string;
};

interface I18nContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (translations: Translations) => string;
}

// Initialize i18next with language detector
i18next.use(LanguageDetector).init({
  fallbackLng: "en",
  supportedLngs: ["en", "ko"],
  detection: {
    order: ["localStorage", "navigator"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
  },
});

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const detected = i18next.language;
    // Handle cases like "en-US" -> "en"
    const normalized = detected?.startsWith("ko") ? "ko" : "en";
    return normalized;
  });

  const setLang = useCallback((newLang: Language) => {
    i18next.changeLanguage(newLang);
    setLangState(newLang);
  }, []);

  // Sync with i18next language changes
  useEffect(() => {
    const handleLanguageChanged = (lng: string) => {
      const normalized = lng.startsWith("ko") ? "ko" : "en";
      setLangState(normalized as Language);
    };
    i18next.on("languageChanged", handleLanguageChanged);
    return () => {
      i18next.off("languageChanged", handleLanguageChanged);
    };
  }, []);

  const t = useCallback(
    (translations: Translations) => translations[lang],
    [lang]
  );

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return context;
};
