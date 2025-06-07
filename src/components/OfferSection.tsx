// components/OfferSection.tsx
import { motion } from "framer-motion";
import Image from "next/image";

export default function OfferSection() {
  return (
    <section className="container mx-auto px-4 py-16 max-w-4xl  w-full">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-bold text-center mb-12">Также предлагаем</h2>

      {/* Карточки предложений */}
      <div className="flex gap-10 w-full">
        {/* Карточка 1: Курсы фундамента */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex-1">
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
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow flex-1">
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
