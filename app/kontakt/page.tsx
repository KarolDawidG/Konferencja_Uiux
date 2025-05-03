'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function KontaktPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('kontaktTitle')}</h1>
        <p className="text-base max-w-2xl">{t('kontaktDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('kontaktEmailTitle')}</h2>
          <p className="text-base max-w-2xl">{t('kontaktEmailContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('kontaktPhoneTitle')}</h2>
          <p className="text-base max-w-2xl">{t('kontaktPhoneContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('kontaktAddressTitle')}</h2>
          <p className="text-base max-w-2xl">{t('kontaktAddressContent')}</p>
        </section>
      </main>
    </div>
  );
}
