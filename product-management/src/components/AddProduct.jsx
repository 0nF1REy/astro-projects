import { useState } from "react";
import { db } from "../lib/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

export default function AddProduct() {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [estoque, setEstoque] = useState("");
  const [loading, setLoading] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "produtos"), {
        nome,
        preco: parseFloat(preco),
        descricao,
        estoque: parseInt(estoque),
        criado: Timestamp.now(),
      });

      setMensagem("✅ Produto criado com sucesso");
      setNome("");
      setPreco("");
      setDescricao("");
      setEstoque("");
      window.location.href = "/products";
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      setMensagem("❌ Erro ao criar o produto");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Criar Produto</h2>

      {mensagem && (
        <div className="text-center text-sm text-green-600">{mensagem}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nome"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Preço"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          required
        />

        <textarea
          placeholder="Descrição"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />

        <input
          type="number"
          placeholder="Estoque"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={estoque}
          onChange={(e) => setEstoque(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 disabled:opacity-50"
        >
          {loading ? "Salvando..." : "Salvar Produto"}
        </button>
      </form>
    </div>
  );
}
