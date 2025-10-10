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
    return <p className="mensagem">Carregando...</p>;

  return (
    <div className="product-form">
      <h2>Atualizar Produto</h2>

      {mensagem && (
        <p className="mensagem">{mensagem}</p>
      )}

      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={produto.nome}
          onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
          placeholder="Nome"
          required
        />

        <input
          type="number"
          value={produto.preco}
          onChange={(e) => setProduto({ ...produto, preco: e.target.value })}
          placeholder="Preço"
          required
        />

        <textarea
          value={produto.descricao}
          onChange={(e) =>
            setProduto({ ...produto, descricao: e.target.value })
          }
          placeholder="Descrição"
        />

        <input
          type="number"
          value={produto.estoque}
          onChange={(e) =>
            setProduto({ ...produto, estoque: e.target.value })
          }
          placeholder="Estoque"
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Atualizando..." : "Atualizar Produto"}
        </button>
      </form>
    </div>
  );
}
