"use client";

import { Prisma, Program } from "@/generated/prisma";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProgramCard({
  program,
}: {
  program: Prisma.ProgramGetPayload<{ include: { prices: true } }>;
}) {
  const minPrice =
    program.prices.length > 0
      ? Math.min(...program.prices.map((p) => p.amount))
      : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px 0px -100px 0px" }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full p-4 "
    >
      <div className="max-w-3xl mx-auto rounded-xl overflow-clip shadow-xl">
        <div className="flex flex-col md:flex-row bg-white shadow-md">
          <div className="bg-[#072B31] p-8 text-white md:w-1/3 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">{program.title}</h2>
            <p className="mb-6">{program.subtitle}</p>
            <ul className="space-y-4 mb-8">
              {program.included.slice(0, 3).map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-teal-300 mr-2">{i + 1}.</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col">
              {minPrice !== null && (
                <span className="text-3xl font-extrabold text-white mb-4">
                  от {minPrice.toLocaleString()} ₽
                </span>
              )}
              <Link
                href={`/booking?program=${encodeURIComponent(program.title)}`}
              >
                <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition-colors text-xl font-bold">
                  Записаться
                </button>
              </Link>
            </div>
          </div>

          <div className="bg-white p-8 ">
            <h3 className="text-xl text-gray-800 mb-6">{program.subtitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                  Включено
                </h4>
                <ul className="space-y-2">
                  {program.included.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                  Что понадобится
                </h4>
                <ul className="space-y-2">
                  {program.required.map((item, i) => (
                    <li key={i} className="flex items-start text-gray-700">
                      <span className="text-teal-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {program.prices.length > 0 && (
              <div className="mt-8">
                <h4 className="font-semibold text-lg mb-3 text-gray-800">
                  Стоимость
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {program.prices.map((price, i) => (
                    <div
                      key={i}
                      className="bg-neutral-200 p-4 rounded-lg shadow-sm"
                    >
                      <p className="text-gray-700 font-medium mb-1">
                        {price.label}
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {price.amount.toLocaleString()} ₽
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
