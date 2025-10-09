import {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../lib/firebase'

export default function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault(); // evita recargar la página
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      // login correcto → redirigir a /products
      window.location.href = "/products";
    } catch (err) {
      setError("Email o contraseña incorrectos");
      console.error(err);
    }
  };
  return (
    <div className="min-h-screen bg-sky-100 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
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
            className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-xl py-3 text-lg"
          >
            Entrar
          </button>
        </form>

        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}

        <p className="mt-6 text-center text-gray-600 text-sm">
          ¿No tienes cuenta?{" "}
          <a href="/register" className="text-sky-500 font-medium hover:underline">
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}