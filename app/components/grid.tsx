"use client";
import { motion } from "framer-motion";
import { FaServer, FaHeadset, FaTrophy } from "react-icons/fa";

export default function InfoGrid() {
  const cards = [
    {
      title: "Vyhrazený CS2 Server",
      description:
        "Běžíme na nízké latenci s 128-tickrate pro maximální výkon a férovou hru.",
      icon: <FaServer className="text-yellow-500" size={40} />,
    },
    {
      title: "Voice Chat & Podpora",
      description:
        "Komunikuj s týmem přes Discord nebo náš integrovaný voice chat.",
      icon: <FaHeadset className="text-yellow-500" size={40} />,
    },
    {
      title: "Turnaje & Odměny",
      description:
        "Zúčastni se LAN turnajů a vyhraj exkluzivní ceny a skiny.",
      icon: <FaTrophy className="text-yellow-500" size={40} />,
    },
  ];

  return (
    <div className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-[#1c1c1c] p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{card.icon}</div>
            <h3 className="text-3xl font-bold mb-2 flex justify-center text-yellow-600">{card.title}</h3>
            <p className="text-gray-300 text-center">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
