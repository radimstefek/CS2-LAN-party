// pages/page.tsx
"use client"

// Zakázání cache: dynamické renderování a revalidate nastaveno na 0
/*export const dynamic = "force-dynamic";
export const revalidate = 0;*/

import Navbar from "./components/navbar";
import Dashboard from "./components/Dashboard";
import LandingPage from "./components/landing_page";
import InfoSlider from "./components/info_slider";
import OverviewTournaments from "./components/overview_tournaments";
import OverviewServers from "./components/overview_cw_servers";
import SmallInfo from "./components/small_info";
import GridPage from "./components/grid";
import Footer from "./components/footer";
import BackToTop from "./components/BackToTop";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
        <LandingPage />
      </header>
      <main className="flex-grow">
        <Dashboard />
        <InfoSlider />
        <OverviewTournaments />
        <OverviewServers />
        <SmallInfo />
        <GridPage />
      </main>
      <footer>
        <Footer />
      </footer>
      <BackToTop />
    </div>
  );
}