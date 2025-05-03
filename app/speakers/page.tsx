'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function SpeakersPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('speakersTitle')}</h1>
        <p className="text-base max-w-2xl">{t('speakersDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('speakersKeynoteTitle')}</h2>
          <p className="text-base max-w-2xl">{t('speakersKeynoteContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('speakersPanelTitle')}</h2>
          <p className="text-base max-w-2xl">{t('speakersPanelContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('speakersWorkshopsTitle')}</h2>
          <p className="text-base max-w-2xl">{t('speakersWorkshopsContent')}</p>
        </section>
      </main>
    </div>
  );
}
