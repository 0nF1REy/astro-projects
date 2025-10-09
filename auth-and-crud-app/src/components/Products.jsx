import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Products() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Usuário autenticado

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
        const prods = [];
        querySnapshot.forEach((doc) => {
          prods.push({ id: doc.id, ...doc.data() });
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
  const handleDelete = async (id) => {
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
    <div className="min-h-screen flex flex-col items-center bg-sky-100 px-4 py-6">
      {/* Cabeçalho com email e logout */}
      <div className="w-full max-w-sm flex justify-between items-center mb-6">
        <span className="text-gray-800 font-medium">
          {user ? `Olá, ${user.email}` : ""}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl font-semibold text-sm transition"
        >
          Sair
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Produtos</h1>

      <button
        onClick={() => (window.location.href = "/addproduct")}
        className="mb-4 w-full max-w-sm bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Adicionar Produto
      </button>

      {loading ? (
        <p className="text-gray-700">Carregando produtos...</p>
      ) : produtos.length === 0 ? (
        <p className="text-gray-700">Ainda não há produtos.</p>
      ) : (
        <ul className="w-full max-w-sm space-y-3">
          {produtos.map((produto) => (
            <li
              key={produto.id}
              className="bg-white rounded-xl p-4 shadow flex justify-between items-center"
            >
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
                  <span className="text-gray-800 font-medium">
                    {produto.nome}
                  </span>
                </a>
                <span className="ml-2 text-gray-500">
                  {produto.preco ? `R$${produto.preco}` : ""}
                </span>
              </div>
              <button
                onClick={() => handleDelete(produto.id)}
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
