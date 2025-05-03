'use client';

import { useContext } from 'react';
import { LanguageContext } from '../../components/LanguageProvider';

export default function KomitetOrganizacyjnyPage() {
  const { t } = useContext(LanguageContext);

  return (
    <div className="p-8 bg-gray-900 text-white min-h-screen">
      <main className="flex flex-col gap-8 items-center sm:items-start">
        <h1 className="text-3xl font-bold">{t('committeeTitle')}</h1>
        <p className="text-base max-w-2xl">{t('committeeDescription')}</p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('committeeRoleTitle')}</h2>
          <p className="text-base max-w-2xl">{t('committeeRoleContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('committeeMembersTitle')}</h2>
          <p className="text-base max-w-2xl">{t('committeeMembersContent')}</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-2">{t('committeeContactTitle')}</h2>
          <p className="text-base max-w-2xl">{t('committeeContactContent')}</p>
        </section>
      </main>
    </div>
  );
}
