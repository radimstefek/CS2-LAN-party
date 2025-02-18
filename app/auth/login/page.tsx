"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      router.push("/");
    } else {
      alert("Neplatné přihlašovací údaje!");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form onSubmit={handleSubmit} className="p-4 bg-gray-800 rounded space-y-4">
        <h1 className="text-2xl font-bold">Přihlásit se</h1>
        <div>
          <label className="block mb-1">Email</label>
          <input
            className="block w-full bg-gray-700 p-2 rounded"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1">Heslo</label>
          <input
            className="block w-full bg-gray-700 p-2 rounded"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="bg-blue-600 px-4 py-2 rounded hover:bg-blue-700" type="submit">
          Přihlásit se
        </button>
      </form>
    </div>
  );
}
