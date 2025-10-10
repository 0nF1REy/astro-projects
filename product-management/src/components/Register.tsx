import { useState } from "react";
import { auth } from "../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // Registro bem-sucedido -> redirecionar para /products
      window.location.href = "/products";
    } catch (err: any) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div className="auth-form">
      <h2>Registrar-se</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Registrar-se
        </button>
      </form>

      {error && <p className="mensagem">{error}</p>}

      <div className="link">
        Já tem uma conta?{' '}
        <a href="/login">Entrar</a>
      </div>
    </div>
  );
}
