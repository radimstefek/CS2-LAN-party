"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LanPartyGrid() {
  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 1. řádek: vlevo obrázek, vpravo text */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/image_1.webp"
              alt="CS2 LAN Party"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl font-bold text-yellow-500">
                Co je CS2 LAN party?
              </h2>
              <motion.div
                className="h-1 bg-yellow-500 mt-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-gray-300 mt-4">
              CS2 LAN party je setkání herní komunity, kde se potkávají hráči
              Counter-Strike 2 a společně soutěží, baví se a navazují nová
              přátelství. Naše akce je zaměřena na turnaje, týmovou spolupráci
              a sdílení herních strategií v reálném čase.
            </p>
          </div>

          {/* 2. řádek: vlevo text, vpravo obrázek */}
          <div className="flex flex-col justify-center md:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-4xl font-bold text-yellow-500">
                Program akce
              </h2>
              <motion.div
                className="h-1 bg-yellow-500 mt-1"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </motion.div>
            <p className="text-gray-300 mt-4">
              Připravili jsme pro vás bohatý program plný turnajů, workshopů a
              diskusí s profesionálními hráči. Na své si přijdou i začátečníci,
              kteří se mohou naučit nové triky a taktiky, a zároveň se seznámit
              s herními veterány.
            </p>
          </div>
          <div className="flex items-center justify-center md:order-2">
            <Image
              src="/images/image_2.webp"
              alt="CS2 LAN Program"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Bullet point shrnutí pod gridem */}
        <ul className="list-disc list-inside text-gray-300 mt-8 space-y-2">
          <li>Vysokorychlostní internet a profesionální herní zázemí</li>
          <li>Setkání s předními hráči a možnost týmového tréninku</li>
          <li>Speciální akce, giveaway a afterparty pro účastníky</li>
        </ul>
      </div>
    </section>
  );
}
