import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro exitoso → redirige a productos
      window.location.href = "/products";
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Regístrate
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl py-3 text-lg"
          >
            Registrarse
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        <p className="mt-6 text-center text-gray-600 text-sm">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-sky-500 font-medium hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
}
