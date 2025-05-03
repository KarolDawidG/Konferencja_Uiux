'use client';

import React, { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';

function LanguageSwitcher() {
  const { locale, setLocale } = useContext(LanguageContext);

  const changeLanguage = () => {
    setLocale(locale === 'en' ? 'pl' : 'en');
  };

  return (
    <div className="absolute top-4 right-4 z-10">
      <button onClick={changeLanguage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {locale === 'en' ? 'Zmień na PL' : 'Switch to EN'}
      </button>
    </div>
  );
}

export default LanguageSwitcher;