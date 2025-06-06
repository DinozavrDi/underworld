

export default function LocationIntro() {
  return (
    <section className="relative mx-auto py-20">

      {/* Первый блок: заголовок и текст */}
      <div className="relative pb-32 pt-12 z-10 mt-32 container mx-auto px-4 flex flex-col md:flex-row items-center mb-20">
        <div className="md:w-1/2 text-left">
        <div className="text-2xl mb-2 text-[#16C9E2]">〰〰</div>
        <div className="text-2xl mb-2 text-[#16C9E2]">〰〰</div>

          <p className="text-8xl text-[#3939D6] font-bold mb-2">Откройте</p>
          <p className="text-4xl text-[#5A70F2] font-semibold mb-4">неизведанные глубины</p>
          <p className="text-gray-700 mb-4">
            Дайвинг — это не просто погружение под воду, а возможность прикоснуться к мирам, скрытым от повседневности.
          </p>
          <p className="text-gray-700">
            Мы предлагаем уникальные маршруты к самым загадочным подводным локациям, включая легендарный "Затерянный город".
          </p>
        </div>
        <div className="md:w-1/2">
          <img src="/images/diver-png-image-file.png" alt="Diver" className="w-full max-w-md mx-auto" />
        </div>
      </div>

      {/* Второй блок: с фото в кругах и списком */}
      <div className="relative z-10 my-32 container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/images/diving@2x.png" alt="Diver in bubbles" className="w-full max-w-md mx-auto" />
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 text-left">
          <p className="text-4xl text-[#5A70F2] font-semibold mb-6">С нами вы получите:</p>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>✔ Профессиональное сопровождение</li>
            <li>✔ Лучшее оборудование</li>
            <li>✔ Незабываемые впечатления</li>
          </ul>
        </div>
      </div>

      {/* Подзаголовок ниже */}
      <div className="relative z-10 mt-16 text-center px-4">
        <p className="text-lg text-black">
          Готовы отправиться в незабываемое приключение?<br />
          Познакомьтесь со всеми доступными локациями и мирами ниже.
        </p>
      </div>

    </section>
  );
}
