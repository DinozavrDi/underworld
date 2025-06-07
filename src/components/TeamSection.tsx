'use client';

const team = [
  {
    name: 'Анна Морская',
    role: 'Инструктор по дайвингу',
    image: 'images/anna.jpg',
    description: 'Провела более 1000 погружений по всему миру. Специалист по работе с новичками и детьми.',
  },
  {
    name: 'Игорь Водолазов',
    role: 'Технический дайвер',
    image: 'images/igor.jpg',
    description: 'Эксперт в глубоководных и пещерных погружениях. Работает в индустрии более 15 лет.',
  },
  {
    name: 'Мария Рифовая',
    role: 'Гид и фотограф',
    image: 'images/mariya.jpg',
    description: 'Покажет самые красивые подводные рифы и сделает невероятные снимки каждого погружения.',
  },
];

export default function TeamSection() {
  return (
    <section className=" py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Наша команда</h2>
        <p className="text-white text-opacity-80">
          Профессионалы, которые обеспечат безопасность и незабываемые впечатления на каждом погружении.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {team.map((member) => (
          <div
            key={member.name}
            className="bg-white bg-opacity-5 rounded-2xl overflow-hidden shadow-xl backdrop-blur-md hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-72 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-[#EEBF00]">{member.name}</h3>
              <p className="text-sm text-white text-opacity-80">{member.role}</p>
              <p className="mt-4 text-white text-opacity-70 text-sm">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
