'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function PatronatyPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('patronatyTitle')}</h1>
        <p className="text-base max-w-2xl">{t('patronatyDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('patronatyHonoraryTitle')}</h2>
          <p className="text-base max-w-2xl">{t('patronatyHonoraryContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('patronatyMediaTitle')}</h2>
          <p className="text-base max-w-2xl">{t('patronatyMediaContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('patronatyPartnersTitle')}</h2>
          <p className="text-base max-w-2xl">{t('patronatyPartnersContent')}</p>
        </section>
      </main>
    </div>
  );
}
