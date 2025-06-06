// components/OfferSection.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OfferSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl ">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-bold text-center mb-12">
        Также предлагаем
      </h2>

      {/* Карточки предложений */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-screen ml-[calc(-50vw+50%)]">
        {/* Карточка 1: Курсы фундамента */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="h-48 relative">
            <Image
              src="/images/courses.jpg" // Замените на свое изображение
              alt="Курсы фундамента"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Курсы фундамента</h3>
            <p className="text-gray-600">
              Профессиональное обучение для начинающих и опытных дайверов
            </p>
          </div>
        </div>

        {/* Карточка 2: Подарочные сертификаты */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="h-48 relative">
            <Image
              src="/images/certificates.jpg" // Замените на свое изображение
              alt="Подарочные сертификаты"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">Подарочные сертификаты</h3>
            <p className="text-gray-600">
              Идеальный подарок для любителей подводного мира
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}