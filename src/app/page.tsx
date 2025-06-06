import HeroSection from '@/components/HeroSection';
import OtherSection from '@/components/OtherSection'; // Пример другого компонента
import TeamSection from '@/components/TeamSection';
import WhatWeCanOffer from '@/components/whatWeCanOffer';

export default function Home() {
  return (
    <main>
      <HeroSection  />
      
      {/* Другие секции */}
      <div className="bg-[url('/images/backPhoto.png')] w-full bg-cover bg-top">
      
        <main className="relative z-10">
          <WhatWeCanOffer />
          <TeamSection />
        </main>
      </div>

      {/* ... остальной контент ... */}
    </main>
  );
}