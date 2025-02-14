// pages/page.tsx
"use client"
import Navbar from "./components/navbar";
import LandingPage from "./components/landing_page";
import Footer from "./components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar isAuthenticated={false} />
      </header>
      <main className="flex-grow">
        <LandingPage />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}