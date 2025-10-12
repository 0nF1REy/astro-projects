import { useState } from "react";
import { auth, db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function AddProduct() {
  const [nome, setNome] = useState<string>("");
  const [preco, setPreco] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");
  const [estoque, setEstoque] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const user = auth.currentUser;
      if (!user) throw new Error("Usuário não autenticado");
      await addDoc(collection(db, "usuarios", user.uid, "produtos"), {
        nome,
        preco: parseFloat(preco),
        descricao,
        estoque: parseInt(estoque),
        criado: Timestamp.now(),
      });

      setMensagem("Produto criado com sucesso");
      setNome("");
      setPreco("");
      setDescricao("");
      setEstoque("");
      window.location.href = "/products";
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      setMensagem("Erro ao criar o produto");
    }

    setLoading(false);
  };

  return (
    <div className="product-form">
      <h2>Criar Produto</h2>

      {mensagem && <div className="mensagem">{mensagem}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <input
          type="number"
          placeholder="Estoque"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar Produto"}
        </button>
      </form>
    </div>
  );
}
