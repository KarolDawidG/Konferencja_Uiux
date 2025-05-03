'use client';

import Link from "next/link";
import { useContext } from 'react';
import { LanguageContext } from './LanguageProvider';
import { usePathname } from 'next/navigation';

interface LayoutClientProps {
  children: React.ReactNode;
}

export default function LayoutClient({ children }: LayoutClientProps) {
  const { locale, setLocale, t } = useContext(LanguageContext);
  const pathname = usePathname();

  const changeLanguage = () => {
    setLocale(locale === 'en' ? 'pl' : 'en');
  };

  return (
    <div className="flex min-h-screen">
      {/* Lewy panel */}
      <aside className="w-64 p-6 fixed bg-gray-800 text-white"> {/* Dodajmy bazowe style panelu */}
        <nav className="flex flex-col space-y-2 text-sm">
          <Link
            href="/"
            className={`${pathname === '/' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('home')}
          </Link>
          <Link
            href="/about"
            className={`${pathname === '/about' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('about')}
          </Link>
          <Link
            href="/misja"
            className={`${pathname === '/misja' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('misja')}
          </Link>
          <Link
            href="/uczestnicy"
            className={`${pathname === '/uczestnicy' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('uczestnicy')}
          </Link>
          <Link
            href="/patronaty"
            className={`${pathname === '/patronaty' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('patronaty')}
          </Link>
          <Link
            href="/komitet-organizacyjny"
            className={`${pathname === '/komitet-organizacyjny' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('komitetOrganizacyjny')}
          </Link>
          <Link
            href="/agenda"
            className={`${pathname === '/agenda' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('agenda')}
          </Link>
          <Link
            href="/speakers"
            className={`${pathname === '/speakers' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('speakers')}
          </Link>
          <Link
            href="/informacje"
            className={`${pathname === '/informacje' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('informacje')}
          </Link>
          <Link
            href="/kontakt"
            className={`${pathname === '/kontakt' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('kontakt')}
          </Link>
          <Link
            href="/formularz"
            className={`${pathname === '/formularz' ? 'bg-blue-500 text-white font-semibold' : 'hover:bg-gray-700 text-gray-300'} py-2 px-4 rounded-md transition duration-200`}
          >
            {t('formularz')}
          </Link>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto ml-64 p-8 flex flex-col justify-between min-h-screen">
        {/* Przycisk zmiany języka */}
        <div className="absolute top-4 right-4 z-10">
          <button onClick={changeLanguage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {locale === 'en' ? t('buttonSwitch_PL') : t('buttonSwitch_EN')}
          </button>
        </div>

        <div className="flex-grow">{children}</div>

        <footer className="fixed bottom-0 left-0 w-full bg-gray-800 text-white p-4 text-center">
          <p>&copy; {new Date().getFullYear()} {t('footer1')}</p>
          <nav className="mt-2">
            <Link href="/kontakt" className="hover:underline">{t('kontakt')}</Link> |{" "}
            <Link href="https://github.com/KarolDawidG/Konferencja_Uiux" className="hover:underline">GitHub</Link>
          </nav>
        </footer>
      </main>
    </div>
  );
}