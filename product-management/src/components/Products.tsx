import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Produto = {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
};

export default function Products() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null>(null); // Usuário autenticado

  // Obter usuário atual
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        window.location.href = "/";
      }
    });

    return () => unsubscribe();
  }, []);

  // Buscar produtos
  useEffect(() => {
    const fetchProdutos = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "produtos"));
        const prods: Produto[] = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          prods.push({
            id: doc.id,
            nome: data.nome,
            preco: data.preco,
            descricao: data.descricao,
            estoque: data.estoque,
          });
        });
        setProdutos(prods);
      } catch (err) {
        console.error("Erro ao carregar produtos: ", err);
      }
      setLoading(false);
    };
    fetchProdutos();
  }, []);

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.href = "/";
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  };

  // Excluir produto
  const handleDelete = async (id: string) => {
    const confirmar = window.confirm(
      "Tem certeza de que deseja excluir este produto?"
    );
    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, "produtos", id));
      setProdutos(produtos.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  };

  return (
    <div className="products-container">
      <div className="products-header">
        <span>{user ? `Olá, ${user.email}` : ""}</span>
        <button onClick={handleLogout}>Sair</button>
      </div>
      <h1 className="products-title">Produtos</h1>
      <button className="products-add-btn" onClick={() => (window.location.href = "/addproduct")}>Adicionar Produto</button>
      {loading ? (
        <p>Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p>Ainda não há produtos.</p>
      ) : (
        <ul className="products-list">
          {produtos.map((produto) => (
            <li key={produto.id}>
              <div>
                <a
                  href={`/editproduct`}
                  onClick={() =>
                    localStorage.setItem(
                      "selectedProduct",
                      JSON.stringify(produto)
                    )
                  }
                >
                  <span className="produto-nome">{produto.nome}</span>
                </a>
                <span className="produto-preco">
                  {produto.preco ? `R$${produto.preco}` : ""}
                </span>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(produto.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
