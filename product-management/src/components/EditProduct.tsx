import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import { doc, updateDoc } from "firebase/firestore";

type Produto = {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  estoque: string;
};

export default function EditProduct() {
  const [produto, setProduto] = useState<Produto | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [mensagem, setMensagem] = useState<string>("");

  // Obter o produto do localStorage
  useEffect(() => {
    const armazenado = localStorage.getItem("selectedProduct");
    if (armazenado) {
      setProduto(JSON.parse(armazenado));
    } else {
      window.location.href = "/products"; // Se não houver produto, redireciona
    }
  }, []);

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!produto) return;

    try {
      const ref = doc(db, "produtos", produto.id);
      await updateDoc(ref, {
        nome: produto.nome,
        preco: parseFloat(produto.preco),
        descricao: produto.descricao,
        estoque: parseInt(produto.estoque),
      });
      setMensagem("Produto atualizado com sucesso");
      setTimeout(() => {
        window.location.href = "/products";
      }, 1000);
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      setMensagem("Erro ao atualizar produto");
    }

    setLoading(false);
  };

  if (!produto)
    return <p className="text-center mt-6 text-gray-700">Carregando...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-sky-100 py-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Atualizar Produto
        </h2>

        {mensagem && (
          <p
            className={`text-center text-sm ${
              mensagem.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {mensagem}
          </p>
        )}

        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            value={produto.nome}
            onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
            placeholder="Nome"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="number"
            value={produto.preco}
            onChange={(e) => setProduto({ ...produto, preco: e.target.value })}
            placeholder="Preço"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <textarea
            value={produto.descricao}
            onChange={(e) =>
              setProduto({ ...produto, descricao: e.target.value })
            }
            placeholder="Descrição"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="number"
            value={produto.estoque}
            onChange={(e) =>
              setProduto({ ...produto, estoque: e.target.value })
            }
            placeholder="Estoque"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 disabled:opacity-50"
          >
            {loading ? "Atualizando..." : "Atualizar Produto"}
          </button>
        </form>
      </div>
    </div>
  );
}
