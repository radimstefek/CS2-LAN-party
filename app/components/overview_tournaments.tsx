"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TournamentStatusGrid() {
  const tournaments = [
    {
      teams: "Team Alpha vs Team Beta",
      start: "17.02.2025 09:12",
      end: "17.02.2025 10:12",
      status: "Skončil",
    },
    {
      teams: "Team Gamma vs Team Delta",
      start: "17.02.2025 10:42",
      end: "17.02.2025 11:42",
      status: "Začíná v 17.02.2025 10:42",
    },
    {
      teams: "Team Epsilon vs Team Zeta",
      start: "17.02.2025 12:42",
      end: "17.02.2025 13:42",
      status: "Začíná v 17.02.2025 12:42",
    },
  ];

  // Animace pro jednotlivé karty
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#121212] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Nadpis v žlutém pruhu */}
        <div className="inline-block bg-yellow-500 px-4 py-2">
          <h1 className="text-black text-xl md:text-2xl font-bold m-0">
            Status Turnajů
          </h1>
        </div>

        {/* Grid se statusy turnajů */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {tournaments.map((t, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] p-6 rounded shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >

              <div
                key={index}
                className="bg-[#1c1c1c] rounded-md p-4 shadow hover:shadow-lg transition-shadow duration-300"
              >
                <h2 className="text-lg font-bold mb-2">{t.teams}</h2>
                {/* Časy ve dvou řádcích */}
                <p className="text-sm mb-2">
                  Od {t.start} do
                  <br />
                  {t.end}
                </p>
                {/* Status s červenou tečkou */}
                <p className="text-sm flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2"></span>
                  {t.status}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tlačítko pro přesměrování na celkový souhrn */}
        < div className="flex justify-end mt-6" >
          <Link
            href="/tournaments"
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-full text-sm font-medium transition-colors text-black"
          >
            Zobrazit celkový souhrn turnajů
          </Link>
        </div>
      </div>
    </section>
  );
}
