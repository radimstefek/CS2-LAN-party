"use client";
import Link from "next/link";
//import { useState } from "react";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavbarProps {
  isAuthenticated?: boolean; // Nastavení jako volitelný prop
}

export default function Navbar({ isAuthenticated = false }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { label: "Domů", href: "/" },
    { label: "O nás", href: "/o-nas" },
    { label: "Turnaje", href: "/tournaments" },
    { label: "Kontakt", href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
  
    // Okamžitá kontrola, aby se stav isScrolled nastavil i při refreshi uprostřed stránky
    handleScroll();
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // Přidány třídy `fixed top-0 left-0 w-full z-50`:
    //<nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white px-6 py-4 shadow-md">
    <nav
      className={`
      fixed top-0 left-0 w-full z-50 px-6 py-4 shadow-md text-white 
      transition-colors duration-300
      ${isScrolled ? "bg-[#121212]/50 backdrop-blur-md" : "bg-[#121212]"}
    `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Levý blok - Logo a text */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/images/logo_cs2_compet.png" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">*si][ki* CS2 LAN party</span>
        </Link>

        {/* Střední blok - Menu položky (Desktop) */}
        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="relative group">
                {item.label}
                {/* Animované podtržení */}
                <span className="relative left-0 bottom-0 block h-0.5 w-0 bg-yellow-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Pravý blok - Autentizační menu (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <button className="hover:underline">Profil</button>
          ) : (
            <>
              <Link href="/auth/login" className="hover:underline">
                Přihlásit se
              </Link>
              <Link href="/auth/register" className="hover:underline">
                Registrovat se
              </Link>
            </>
          )}
        </div>

        {/* Mobilní menu tlačítko s animací ikon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none relative w-6 h-6"
          >
            <FiMenu
              className={`absolute top-0 left-0 transition-transform duration-300 transform ${
                mobileMenuOpen ? "opacity-0 -rotate-90" : "opacity-100 rotate-0"
              }`}
            />
            <FiX
              className={`absolute top-0 left-0 transition-transform duration-300 transform ${
                mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobilní menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Autentizační odkazy v mobilním menu */}
            <li className="pt-4 border-t border-gray-700">
              {isAuthenticated ? (
                <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 transition-colors">
                  Profil
                </button>
              ) : (
                <>
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Přihlásit se
                  </Link>
                  <Link
                    href="/auth/register"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-800 transition-colors"
                  >
                    Registrovat se
                  </Link>
                </>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
