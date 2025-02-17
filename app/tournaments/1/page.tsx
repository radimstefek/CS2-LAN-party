"use client";
import { useParams } from "next/navigation";

export default function TournamentDetailPage() {
  const params = useParams();
  const tournamentId = params.id;

  // V reálném projektu byste zde načetli detailní data o turnaji (např. fetch z API)
  // Pro ukázku jen vypíšeme ID:
  return (
    <div className="bg-[#121212] min-h-screen text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Detail turnaje</h1>
      <p>Tournament ID: {tournamentId}</p>
      {/* Zde můžete zobrazit detaily, statistiky, harmonogram, atd. */}
    </div>
  );
}
