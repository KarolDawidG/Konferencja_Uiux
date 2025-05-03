'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function MisjaPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('misjaTitle')}</h1>
        <p className="text-base max-w-2xl">{t('misjaDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('misjaSection1Title')}</h2>
          <p className="text-base max-w-2xl">{t('misjaSection1Content')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('misjaSection2Title')}</h2>
          <p className="text-base max-w-2xl">{t('misjaSection2Content')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('misjaSection3Title')}</h2>
          <p className="text-base max-w-2xl">{t('misjaSection3Content')}</p>
        </section>
      </main>
    </div>
  );
}
