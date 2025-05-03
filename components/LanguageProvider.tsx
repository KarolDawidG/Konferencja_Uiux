'use client';

import React, { createContext, useState, useEffect, ReactNode } from 'react';

type Translations = Record<string, string>;

interface LanguageContextProps {
  locale: string;
  setLocale: (locale: string) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextProps>({
  locale: 'pl',
  setLocale: () => {},
  t: (key) => key,
});

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState('pl');
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  useEffect(() => {
    import(`../locales/${locale}.json`)
      .then((module) => setTranslations(module.default))
      .catch(() => setTranslations({}));
    localStorage.setItem('locale', locale);
  }, [locale]);

  const t = (key: string) => translations[key] || key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
