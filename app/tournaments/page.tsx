"use client";

import { useRouter } from "next/navigation";

// Příklad turnajů, v reálném projektu můžete načítat data z API nebo databáze
const tournamentsData = [
  {
    id: 1,
    name: "ESL Challenger League Season 49: Europe",
    game: "CS2, FACEIT",
    status: "Ongoing",
    teams: 16,
    peakViewers: "30k",
    matches: "12/20",
    eventDate: "21.01.25 - 15.03.25",
  },
  {
    id: 2,
    name: "Fragster Challenger Series",
    game: "CS2, Fragster",
    status: "Ongoing",
    teams: 8,
    peakViewers: "10k",
    matches: "5/10",
    eventDate: "20.02.25 - 28.02.25",
  },
  {
    id: 3,
    name: "PGL ClujNapoca 2025",
    game: "CS2, PGL",
    status: "Upcoming",
    teams: 24,
    peakViewers: "-",
    matches: "0/30",
    eventDate: "10.03.25 - 20.03.25",
  },
  // Přidejte další...
];

export default function TournamentsPage() {
  const router = useRouter();

  const handleRowClick = (tournamentId: number) => {
    // Přesměruje na detail daného turnaje
    router.push(`/tournaments/${tournamentId}`);
  };

  return (
    <div className="bg-[#121212] min-h-screen text-white p-4">
      {/* Nadpis */}
      <h1 className="text-2xl font-bold mb-4">Přehled turnajů</h1>

      {/* Filtry a řazení (placeholdery pro ukázku) */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <div>
          <input
            type="text"
            placeholder="Search tournament by name"
            className="bg-gray-800 px-4 py-2 rounded text-sm"
          />
        </div>
        <div className="flex items-center space-x-2 mt-2 md:mt-0">
          <button className="bg-gray-700 px-3 py-2 rounded text-sm hover:bg-gray-600">
            Without stats
          </button>
          <select className="bg-gray-800 px-3 py-2 rounded text-sm">
            <option>Sort by: Event Date</option>
            <option>Sort by: Name</option>
          </select>
        </div>
      </div>

      {/* Tabulka turnajů */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead className="bg-gray-800 uppercase text-xs text-gray-400">
            <tr>
              <th className="px-4 py-2 font-medium">Tournament</th>
              <th className="px-4 py-2 font-medium">Game</th>
              <th className="px-4 py-2 font-medium">Status</th>
              <th className="px-4 py-2 font-medium">Teams</th>
              <th className="px-4 py-2 font-medium">Peak Viewers</th>
              <th className="px-4 py-2 font-medium">Matches</th>
              <th className="px-4 py-2 font-medium">Event Date</th>
            </tr>
          </thead>
          <tbody>
            {tournamentsData.map((tournament) => (
              <tr
                key={tournament.id}
                className="border-b border-gray-700 hover:bg-gray-800 cursor-pointer"
                onClick={() => handleRowClick(tournament.id)}
              >
                <td className="px-4 py-2">{tournament.name}</td>
                <td className="px-4 py-2">{tournament.game}</td>
                <td className="px-4 py-2 text-green-400">{tournament.status}</td>
                <td className="px-4 py-2">{tournament.teams}</td>
                <td className="px-4 py-2">{tournament.peakViewers}</td>
                <td className="px-4 py-2">{tournament.matches}</td>
                <td className="px-4 py-2">{tournament.eventDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
