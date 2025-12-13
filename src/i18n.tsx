import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";

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

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");

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
