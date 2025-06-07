"use client";

import { useState } from "react";
import Image from "next/image";

const offers = [
  {
    title: "Обучение",
    image: "/images/training.jpg",
    description:
      "Ваш первый раз? Мы поможем и всё покажем! Погружения проводятся с опытными инструкторами, в безопасных условиях.",
  },
  {
    title: "Открытое море",
    image: "/images/open-sea.jpg",
    description:
      "Давно мечтали погрузиться в настоящее море? С нами вы исследуете самые живописные участки прибрежных рифов и морскую фауну.",
  },
  {
    title: "Особые локации",
    image: "/images/special-locations.jpg",
    description:
      "Желаете увидеть нечто удивительное? Погружения на затонувшие корабли, гроты и уникальные подводные места уже ждут вас!",
  },
];

export default function WhatWeCanOffer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOffer = offers[activeIndex];

  return (
    <section className=" py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Left: Tabs */}
        <div className="flex md:flex-col gap-4 justify-center">
          {offers.map((offer, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 text-left rounded-l-full transition-all font-semibold ${
                index === activeIndex
                  ? "bg-[#EEBF00] text-[#00334E]"
                  : "bg-white bg-opacity-10 hover:bg-opacity-20 text-white"
              }`}
            >
              {offer.title}
            </button>
          ))}
        </div>

        {/* Right: Content */}
        <div className="flex-1 bg-white bg-opacity-5 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <Image
            src={activeOffer.image}
            alt={activeOffer.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover object-center"
          />
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="md:flex-[2]">
                <h3 className="text-2xl font-bold text-[#16C9E2] mb-2">
                  {activeOffer.title}
                </h3>
                <p className="text-white text-opacity-80 text-base">
                  {activeOffer.description}
                </p>
              </div>
              <div className="md:flex-[1] flex justify-start md:justify-end items-start md:items-center">
                <button className="bg-[#EEBF00] text-[#00334E] font-semibold py-4 px-16 rounded-full hover:bg-yellow-400 transition-colors">
                  Узнать подробнее
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
