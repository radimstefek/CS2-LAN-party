"use client";
import Link from "next/link";
import { motion } from "framer-motion";
// Import ikon
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTwitch,
  FaDiscord,
  FaSteam,
} from "react-icons/fa";
import { SiTeamspeak } from "react-icons/si";

// Animace pro celý footer
const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.2, // Prvky se objevují postupně
    },
  },
};

// Animace pro jednotlivé prvky (logo, text, ikonky)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Efekt pro sociální sítě (plovoucí při hoveru)
const hoverEffect = {
  scale: 1.1,
  rotate: [-2, 2, 0], // Jemné naklánění
  transition: { duration: 0.3, ease: "easeInOut" },
};

export default function Footer() {
  return (
    <motion.footer
      className="relative text-white py-8 overflow-hidden"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/footer_bg.mp4" type="video/mp4" />
      </video>

      {/* Overlay - tmavá vrstva, aby byl text viditelný */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      {/* Obsah footeru */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Horní řádek: Logo vlevo, text uprostřed, soc. sítě vpravo */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo vlevo */}
          <motion.div className="flex items-center space-x-2" variants={itemVariants}>
            <img src="/images/cs2_footer_logo.png" alt="Logo" className="h-10 w-auto" />
            {/* <img src="/images/_si][ki_ CS2 LAN Party.webp" alt="Logo" className="h-20 w-auto" /> */}
            <span className="font-bold text-xl">CS2 LAN Tournament</span>
          </motion.div>

          {/* Text uprostřed */}
          <motion.div className="text-center max-w-md mx-auto md:flex-1" variants={itemVariants}>
            <p className="text-sm text-gray-300">
              Pořádáme jedny z největších turnajů v Counter-Strike 2.
              Přidejte se a zažijte atmosféru profi LAN klání!
            </p>
          </motion.div>

          {/* Sociální sítě vpravo, rozdělené do dvou řádků */}
          <motion.div className="flex flex-col items-end w-full md:w-auto space-y-3">
            {/* Horní řádek: hlavní sítě zarovnané doprava */}
            <div className="flex justify-end space-x-6">
              {[
                { href: "https://facebook.com", icon: FaFacebookF, label: "Facebook" },
                { href: "https://instagram.com", icon: FaInstagram, label: "Instagram" },
                { href: "https://twitter.com", icon: FaTwitter, label: "Twitter" },
                { href: "https://twitch.tv", icon: FaTwitch, label: "Twitch" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={hoverEffect}
                  target="_blank" // Otevře novou kartu
                  rel="noopener noreferrer" // Bezpečnostní opatření
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Spodní řádek: Discord, TeamSpeak, Steam uprostřed */}
            <div className="flex space-x-6 self-center">
              {[
                { href: "https://discord.com", icon: FaDiscord, label: "Discord" },
                { href: "https://teamspeak.com/", icon: SiTeamspeak, label: "TeamSpeak" },
                { href: "https://store.steampowered.com/app/730/", icon: FaSteam, label: "Steam" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={href}
                  href={href}
                  className="text-gray-300 hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={hoverEffect}
                  target="_blank" // Otevře novou kartu
                  rel="noopener noreferrer" // Bezpečnostní opatření
                  aria-label={label}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Čára pod horním blokem */}
        <hr className="my-6 border-gray-700" />

        {/* Spodní text */}
        <motion.p
          className="text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          © 2025 CS2 LAN. Všechna práva vyhrazena.
        </motion.p>
      </div>
    </motion.footer>
  );
}
