import { useEffect, useState } from "react";
import { auth, db } from "../lib/firebase";
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";

export default function Products() {
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [user, setUser] = useState(null); // usuario autenticado

  // Obtener usuario actual

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Si no hay usuario → redirigir a login

        window.location.href = "/";
      }
    });

    return () => unsubscribe();
  }, []);

  // Traer productos

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const querySnapshot = await getDocs(collection(db, "productos"));

        const prods = [];

        querySnapshot.forEach((doc) => {
          prods.push({ id: doc.id, ...doc.data() });
        });

        setProducts(prods);
      } catch (err) {
        console.error("Error cargando productos: ", err);
      }

      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Cerrar sesión

  const handleLogout = async () => {
    try {
      await signOut(auth);

      window.location.href = "/"; // redirigir a inicio
    } catch (err) {
      console.error("Error cerrando sesión:", err);
    }
  };

  //Eliminar producto con confirmacion
  const handleDelete = async (id) => {
    const confirmar = window.confirm(
      "¿Estás seguro de eliminar este producto?"
    );
    if (!confirmar) return;

    try {
      await deleteDoc(doc(db, "productos", id));
      setProducts(products.filter((p) => p.id !== id)); // actualizar lista en UI
    } catch (err) {
      console.error("Error al eliminar producto:", err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-sky-100 px-4 py-6">
      {/* Header con email y logout */}

      <div className="w-full max-w-sm flex justify-between items-center mb-6">
        <span className="text-gray-800 font-medium">
          {user ? `Hola, ${user.email}` : ""}
        </span>

        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-xl font-semibold text-sm transition"
        >
          Cerrar sesión
        </button>
      </div>

      <h1 className="text-2xl font-bold text-gray-800 mb-6">Productos</h1>

      <button
        onClick={() => (window.location.href = "/addproduct")}
        className="mb-4 w-full max-w-sm bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-xl font-semibold transition"
      >
        Añadir Producto
      </button>

      {loading ? (
        <p className="text-gray-700">Cargando productos...</p>
      ) : products.length === 0 ? (
        <p className="text-gray-700">No hay productos aún.</p>
      ) : (
        <ul className="w-full max-w-sm space-y-3">
          {products.map((product) => (           
            <li
              key={product.id}
              className="bg-white rounded-xl p-4 shadow flex justify-between items-center"
            >
              <div>
                <a
                  href={`/editproduct`}
                  onClick={() =>
                    localStorage.setItem(
                      "selectedProduct",
                      JSON.stringify(product)
                    )
                  }
                >
                  <span className="text-gray-800 font-medium">
                    {product.nombre}
                  </span>
                </a>
                <span className="ml-2 text-gray-500">
                  {product.precio ? `$${product.precio}` : ""}
                </span>
              </div>
              <button
                onClick={() => handleDelete(product.id)}
                className="ml-4 text-red-500 hover:text-red-700 font-bold"
              >
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
