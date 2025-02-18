"use client";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import DashboardRegistrations from "./DashboardRegistrations";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const [isOpen, setIsOpen] = useState(true);

  if (!isAuthenticated) return null;

  return (
    <div className="fixed left-0 top-16 h-screen">
      <div
        className={`flex h-full transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-48"
        }`}
      >
        {/* Hlavní panel s obsahem dashboardu */}
        <aside className="bg-gray-800/70 w-48 p-4 shadow-lg h-full">
          <h2 className="text-lg font-bold mb-4">Dashboard</h2>
          <ul className="space-y-2">
            <li>Moje statistiky</li>
            <li>Správa účtu</li>
            <li>Seznam turnajů</li>
            <li>
              <DashboardRegistrations />
            </li>
          </ul>
        </aside>

        {/* Užší sloupec s ikonou pro otevření/zavření */}
        <div className="bg-gray-800/80 w-10 flex items-center justify-center hover:bg-gray-700/80 transition-colors h-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
              <BsChevronDoubleLeft size={18} />
            ) : (
              <BsChevronDoubleRight size={18} />
            )}
        </div>
      </div>
    </div>
  );
}
