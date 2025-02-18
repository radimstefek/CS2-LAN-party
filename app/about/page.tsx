"use client";
import Navbar from "../components/navbar";
import AboutUs from "../components/about";
import Footer from "../components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow">
        <AboutUs />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
