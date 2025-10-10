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
    <div className="auth-form">
      <h2>Entrar</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Entrar
        </button>
      </form>

      {error && <p className="mensagem">{error}</p>}

      <div className="link">
        Não tem uma conta?{' '}
        <a href="/register">Registre-se</a>
      </div>
    </div>
  );
}
