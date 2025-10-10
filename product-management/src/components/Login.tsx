import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita recarregar a página
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // Login correto -> redirecionar para /products
      window.location.href = "/products";
    } catch (err) {
      setError("Email ou senha incorretos");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Entrar
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <button
            type="submit"
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl py-3 text-lg"
          >
            Entrar
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        <p className="mt-6 text-center text-gray-600 text-sm">
          Não tem uma conta?{" "}
          <a
            href="/register"
            className="text-sky-500 font-medium hover:underline"
          >
            Registre-se
          </a>
        </p>
      </div>
    </div>
  );
}
