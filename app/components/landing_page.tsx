import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="
      relative 
      min-h-screen 
      flex 
      items-center 
      justify-start 
      bg-[url('/images/csbg_mobile2.jpg')]  /* Mobilní (výchozí) */
      md:bg-[url('/images/csbg.jpg')]      /* Od md breakpointu a výš */
      bg-cover 
      bg-center
      ">

      {/* Fadeout efekt ve spodní části */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />

      <main className="
          relative 
          text-left 
          px-8 
          py-8 
          max-w-2xl 
          mb-44           /* Výchozí pro opravdu malé displeje (např. iPhone SE) */
          sm:mb-24        /* Od šířky 640px (iPhone 14 Pro Max spadne sem) */
          md:py-16 
          md:pl-20 
          md:pt-20 
          md:mb-64        /* Od 768px (tablety, menší notebooky) */
          lg:mb-96        /* Od 1024px (větší displeje, desktop) */
      ">
        {/* Titulek – animujeme s framer-motion */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 text-yellow-400"
        >
          Vítejte v CS2!
        </motion.h1>

        {/* Popis – také animace, s mírným zpožděním */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 text-white"
        >
          Zažijte další generaci taktického střílečky a soutěžte s hráči z celého světa!
        </motion.p>

        {/* Tlačítko pro výzvu k akci – žluté, jednoduché „pulsní“ zvětšení při hoveru */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#"
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-3 rounded-full text-lg font-medium transition-transform transform hover:scale-105"
        >
          Začít hru
        </motion.a>
      </main>
    </div>
  );
}
