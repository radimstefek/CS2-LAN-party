"use client"
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log("Odeslaná data:", formData);
    // Zde můžete přidat odeslání dat na server např. pomocí fetch nebo axios
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Horní část - Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Hlavní obsah - Kontaktní formulář */}
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-lg w-full p-6 bg-gray-100 rounded shadow">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Kontaktujte nás
          </h2>
          {submitted ? (
            <div className="text-green-500 text-center">
              Děkujeme, váš formulář byl odeslán!
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Jméno:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700">
                  Zpráva:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Odeslat
              </button>
            </form>
          )}
        </div>
      </main>

      {/* Spodní část - Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
