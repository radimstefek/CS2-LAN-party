"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardRegistrations() {
  return (
    <section className="p-4 bg-gray-800 text-white rounded shadow mt-4">
      <motion.h3
        className="text-2xl font-bold mb-4 text-yellow-500"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Registrace hráčů
      </motion.h3>
      
      {/* Přihlašování přes Steam OAuth */}
      <div className="mb-4">
        <p className="mb-2">Přihlašte se přes Steam:</p>
        <Link
          href="/api/auth/steam"
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
        >
          Přihlásit se přes Steam
        </Link>
      </div>
      
      {/* Tvorba a správa týmů */}
      <div className="mb-4">
        <p className="mb-2">Tvorba a správa týmů:</p>
        <p className="text-sm text-gray-300">
          Po úspěšném přihlášení budete moci vytvářet své týmy, upravovat jejich nastavení a spravovat členy.
        </p>
      </div>
      
      {/* Potvrzování účasti a admin panel */}
      <div>
        <p className="mb-2">Potvrzování účasti a správa hráčů:</p>
        <p className="text-sm text-gray-300">
          Organizátoři turnaje mohou potvrzovat účast, spravovat registrace a sledovat přehled hráčů v administrátorském panelu.
        </p>
      </div>
    </section>
  );
}
