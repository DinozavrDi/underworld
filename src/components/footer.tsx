'use client'

import { usePathname } from "next/navigation";


export default function Footer() {
    const pathname = usePathname()

    if (pathname=='/registration' || pathname=='/login' || pathname=='/booking' ) return

  return (
    <footer className="bg-[#111111] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Колонка 1 */}
          <div>
            <h3 className="text-lg font-bold text-[#EEBF00] mb-4">О нас</h3>
            <p className="text-gray-300">
              Мы создаем уникальные программы погружения, чтобы подарить вам
              незабываемые впечатления. Профессиональные гиды, сертифицированные
              локации и душевная атмосфера.
            </p>
          </div>

          {/* Колонка 2 */}
          <div>
            <h3 className="text-lg font-bold text-[#EEBF00] mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400">Главная</a></li>
              <li><a href="/programs" className="hover:text-yellow-400">Программы</a></li>
              <li><a href="/locations" className="hover:text-yellow-400">Локации</a></li>
              <li><a href="/contact" className="hover:text-yellow-400">Контакты</a></li>
            </ul>
          </div>

          {/* Колонка 3 */}
          <div>
            <h3 className="text-lg font-bold text-[#EEBF00] mb-4">Свяжитесь с нами</h3>
            <ul className="space-y-2">
              <li>Email: <a href="mailto:info@glubina.ru" className="hover:text-yellow-400">info@glubina.ru</a></li>
              <li>Тел: <a href="tel:+79991234567" className="hover:text-yellow-400">+7 (999) 123-45-67</a></li>
              <li>Адрес: Москва, ул. Подводная, д.7</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-600 pt-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} Глубокий мир. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
