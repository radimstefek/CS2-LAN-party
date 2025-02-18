"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  // Varianta pro kontejner – zajišťuje, že children (item) se budou animovat postupně
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // postupné zobrazení dětí
      },
    },
  };

  // Varianta pro jednotlivé prvky
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="bg-[#121212] text-yellow-500 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          O nás
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* 1. dlaždice */}
          <motion.div
            className="flex flex-col justify-center space-y-4 bg-[#1E1E1E] p-6 rounded"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-yellow-500">Náš tým</h3>
            <p className="text-gray-300">
              Jsme parta nadšenců do kompetitivního hraní. Naším cílem je
              pořádat LAN akce, kde se setkávají hráči z celé země. 
              Věříme, že hraní her je nejen zábava, ale také skvělý způsob,
              jak se seznámit s novými lidmi a zdokonalit týmovou spolupráci.
            </p>
          </motion.div>

          <motion.div
            className="rounded overflow-hidden"
            variants={itemVariants}
          >
            <Image
              src="/images/about_1.webp"
              alt="Náš tým"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* 2. dlaždice */}
          <motion.div
            className="rounded overflow-hidden"
            variants={itemVariants}
          >
            <Image
              src="/images/about_2.webp"
              alt="Historie"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center space-y-4 bg-[#1E1E1E] p-6 rounded"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-yellow-500">Naše historie</h3>
            <p className="text-gray-300">
              První LAN party jsme uspořádali už v roce 2015. Začínali jsme s
              menšími turnaji pro několik týmů, ale díky skvělé komunitě se
              naše akce postupně rozrostly do dnešní podoby. Dnes pořádáme
              LAN turnaje pro stovky hráčů a snažíme se neustále zlepšovat
              kvalitu našich akcí.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
