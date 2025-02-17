"use client";
import { motion } from "framer-motion";

export default function TournamentSection() {
  return (
    <section className="bg-[#121212] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Velký nadpis */}
        <h1 className="text-5xl font-bold text-yellow-500 mb-4">
          CS2 LAN Turnaj 2025
        </h1>
        {/* Podnadpis */}
        <h2 className="text-2xl mb-6">
          Vítejte na oficiální stránce turnaje pořádaného CS2 komunitou
        </h2>
        {/* Popis turnaje */}
        <p className="text-lg mb-8">
          Připravte se na nezapomenutelný zážitek s nejlepšími týmy, soutěžemi a
          exkluzivními odměnami. Přijďte a zažijte atmosféru profesionální CS2 akce,
          kde se setkávají hráči z celého světa!
        </p>
        {/* Video embed s neonovým glow při scrollu */}
        <motion.div
          className="relative aspect-video rounded-3xl"
          initial={{ boxShadow: "none" }}
          whileInView={{ 
            boxShadow: "0 0 40px 5px #eab308" 
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror"
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <iframe
            src="https://www.youtube.com/embed/CFaBOQC5J4E?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0"
            title="CS2 LAN Turnaj 2025"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-3xl"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
