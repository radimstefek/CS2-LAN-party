"use client";
import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";
import Link from "next/link";

export default function OverviewCWServer() {
  // Ukázková data serverů
  const servers = [
    {
      name: "CS2 Server 1",
      ip: "192.168.1.100:27015",
      status: "online",
    },
    {
      name: "CS2 Server 2",
      ip: "cs2.example.com:27016",
      status: "offline",
    },
    {
      name: "CS2 Server 3",
      ip: "cs2.example.net:27017",
      status: "online",
    },
  ];

  // Animace pro jednotlivé karty
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Nadpis v žlutém pruhu */}
        {/* Nadpis v žlutém pruhu */}
        <div className="inline-block bg-yellow-500 px-4 py-2">
          <h1 className="text-black text-xl md:text-2xl font-bold m-0">
            Status CS2 Serverů
          </h1>
        </div>

        {/* Grid se statusy serverů */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {servers.map((server, index) => (
            <motion.div
              key={index}
              className="bg-[#1c1c1c] p-6 rounded shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-xl font-bold mb-2">{server.name}</h3>
              <p className="text-gray-300 mb-4">{server.ip}</p>
              <div className="flex items-center">
                <FaCircle
                  size={16}
                  className={`mr-2 ${
                    server.status === "online" ? "text-green-500" : "text-red-500"
                  }`}
                />
                <span className="text-sm">
                  {server.status === "online" ? "Online" : "Offline"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Tlačítko pro přesměrování na celkový souhrn */}
        <div className="flex justify-end mt-6">
          <Link
            href="/tournaments"
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-full text-sm font-medium transition-colors text-black"
          >
            Zobrazit celkový souhrn serverů
          </Link>
        </div>
      </div>
    </section>
  );
}
