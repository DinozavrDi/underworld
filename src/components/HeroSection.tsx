'use client';
import { motion, useTransform, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Home() {
  const [fontSize, setFontSize] = useState('15vw'); // Адаптивный размер для DEEPWORLD
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const handleResize = () => {
      // Динамически меняем размер DEEPWORLD
      setFontSize(Math.min(window.innerWidth * 0.15, 200) + 'px');
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden h-[calc(100vh+180px)] "> {/* Увеличенная высота */}
      {/* Фоновое изображение */}
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src="https://get.wallhere.com/photo/sea-rock-water-underwater-1807397.jpg"
          alt="Горный пейзаж"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Затемнение фона */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Основной контент */}
      <div className="relative h-full  w-full flex flex-col justify-center mt-32">
        {/* 1. Верхний ряд: Название и дата */}
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-8xl font-bold text-white w-32"
            >
              НОВАЯ ЛОКАЦИЯ
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-full px-4 py-4 border border-white/30"
            >
              <p className="text-white text-sm md:text-xl font-medium">
                С 30 апреля по 28 сентября
              </p>
            </motion.div>
          </div>
        </div>

        {/* 2. Центральный ряд: DEEPWORLD */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 0.4 }}
          className="w-full text-center"
          style={{ fontSize }}
        >
          <h2 className="font-black text-white/20 tracking-wider whitespace-nowrap">
            DEEPWORLD
          </h2>
        </motion.div>

        {/* 3. Кнопка (выровнена с заголовком) */}
        <div className="container mx-auto px-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-[#EEBF00] text-text-white hover:bg-orange-600 text-white px-8 md:px-10 md:py-4 rounded-full text-lg md:text-xl font-semibold transition-colors shadow-lg"
          >

            ПЕРЕЙТИ К ПРЕДЛОЖЕНИЯМ
            
          </motion.button>
        </div>

        {/* 4. Нижний ряд: Три карточки */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div className="container mx-auto  px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-10">
              <FeatureCard 
                icon="⛰️" 
                title="Новый опыт" 
                description="Даже для самых опытных перемещений" 
              />
              <FeatureCard 
                icon="👨‍👩‍👧‍👦" 
                title="Хороший отдых" 
                description="Особенно в семье и с друзьями" 
              />
              <FeatureCard 
                icon="🎁" 
                title="Сюрпризы" 
                description="Мы позаботимся о ваших воспоминаниях" 
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: string; 
  title: string; 
  description: string 
}) {
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-t-lg shadow-xl hover:shadow-2xl transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
}