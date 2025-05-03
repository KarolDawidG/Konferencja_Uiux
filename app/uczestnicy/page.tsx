'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function UczestnicyPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('participantsTitle')}</h1>
        <p className="text-base max-w-2xl">{t('participantsDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('participantsProfileTitle')}</h2>
          <p className="text-base max-w-2xl">{t('participantsProfileContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('participantsBenefitsTitle')}</h2>
          <p className="text-base max-w-2xl">{t('participantsBenefitsContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('participantsNetworkingTitle')}</h2>
          <p className="text-base max-w-2xl">{t('participantsNetworkingContent')}</p>
        </section>
      </main>
    </div>
  );
}
