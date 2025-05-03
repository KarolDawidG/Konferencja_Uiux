'use client';

import Image from 'next/image';
import { useContext } from 'react';
import { LanguageContext } from '../components/LanguageProvider';

export default function Home() {
  const { t } = useContext(LanguageContext);
  
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="p-8 text-center bg-gradient-to-b from-gray-900 to-gray-800">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{t('heroTitle')}</h1>
        <p className="text-lg sm:text-xl mb-6">{t('heroDescription')}</p>
        <a
          href="/formularz"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition"
        >
          {t('heroCTA')}
        </a>
      </section>

      {/* Informacje o konferencji */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">{t('homeaboutTitle')}</h2>
        <p className="text-base leading-relaxed">{t('homeaboutDescription')}</p>
      </section>

      {/* Prelegenci */}
      <section className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('homespeakersTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
          
          <div className="text-center">
            <Image
              src="/Anna.png"
              alt={t('speaker1Name')}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{t('speaker1Name')}</h3>
            <p className="text-sm text-gray-400">{t('speaker1Role')}</p>
          </div>

          <div className="text-center">
            <Image
              src="/Andrzej.png"
              alt={t('speaker1Name')}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{t('speaker1Name')}</h3>
            <p className="text-sm text-gray-400">{t('speaker1Role')}</p>
          </div>

          <div className="text-center">
            <Image
              src="/Dominika.png"
              alt={t('speaker1Name')}
              width={150}
              height={150}
              className="rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">{t('speaker1Name')}</h3>
            <p className="text-sm text-gray-400">{t('speaker1Role')}</p>
          </div>

        </div>
      </section>

      {/* Opinie */}
      <section className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('testimonialsTitle')}</h2>
        <div className="space-y-6">
          <blockquote className="bg-gray-800 p-6 rounded shadow">
            <p className="italic">"{t('testimonial1Text')}"</p>
            <footer className="mt-4 text-right">— {t('testimonial1Author')}</footer>
          </blockquote>
        </div>
      </section>

      {/* Sponsorzy */}
      <section className="p-8 bg-gray-800">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('sponsorsTitle')}</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image
            src="/next.svg"
            alt="Sponsor Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </div>
      </section>
    </div>
  );
}
