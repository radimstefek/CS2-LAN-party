// pages/page.tsx
"use client"

// Zakázání cache: dynamické renderování a revalidate nastaveno na 0
/*export const dynamic = "force-dynamic";
export const revalidate = 0;*/

import Navbar from "./components/navbar";
import LandingPage from "./components/landing_page";
import InfoSlider from "./components/info_slider";
import OverviewTournaments from "./components/overview_tournaments";
import SmallInfo from "./components/small_info";
import GridPage from "./components/grid";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar isAuthenticated={false} />
      </header>
      <main className="flex-grow">
        <LandingPage />
        <InfoSlider />
        <OverviewTournaments />
        <GridPage />
        <SmallInfo />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}