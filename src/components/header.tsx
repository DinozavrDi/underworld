'use client';

import { useSession, signOut, SessionProvider } from 'next-auth/react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/') {
      const handleScroll = () => setScrolled(window.scrollY > 50);
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setScrolled(true);
    }
  }, [pathname]);

  const isTransparent = pathname === '/' && !scrolled;

  return (
    <header className={`
      fixed top-0 w-full z-50 transition-all duration-300
      ${isTransparent ? 'bg-transparent text-white' : 'bg-white shadow-sm text-gray-800'}
    `}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Глубокий мир
        </Link>

        <nav className="hidden md:flex space-x-8">
          <Link href="/programs" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
            Программы
          </Link>
          <Link href="/locations" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
            Локации
          </Link>
          <SessionProvider>
            <UserBlock isTransparent={isTransparent} />
          </SessionProvider>
        </nav>
      </div>
    </header>
  );
}

function UserBlock({ isTransparent }: { isTransparent: boolean }) {
  const { data: session } = useSession();
  const router = useRouter();
  const role = session?.user?.role;

  return (
    <>
      {session ? (
        <>
          {role === 'admin' && (
            <Link href="/admin" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
              Панель админа
            </Link>
          )}
          {role === 'user' && (
            <Link href="/profile" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
              Профиль
            </Link>
          )}
          <button
            onClick={() => signOut({ callbackUrl: '/' })}
            className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}
          >
            Выход
          </button>
        </>
      ) : (
        <>
          <Link href="/login" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
            Вход
          </Link>
          <Link href="/registration" className={`hover:text-orange-500 ${isTransparent ? 'text-white' : 'text-gray-600'}`}>
            Регистрация
          </Link>
        </>
      )}
    </>
  );
}