import {useState, useEffect} from 'react'
import {db} from '../lib/firebase'
import {doc, updateDoc} from 'firebase/firestore'

export default function EditProduct(){
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)
    const [mensaje, setMensaje] = useState("")

     // Obtener el producto desde localStorage
  useEffect(() => {
    const stored = localStorage.getItem("selectedProduct");
    if (stored) {
      setProduct(JSON.parse(stored));
    } else {
      window.location.href = "/products"; // si no hay producto, redirige
    }
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const ref = doc(db, "productos", product.id);
      await updateDoc(ref, {
        nombre: product.nombre,
        precio: parseFloat(product.precio),
        descripcion: product.descripcion,
        stock: parseInt(product.stock),
      });
      setMensaje("✅ Producto actualizado correctamente");      
      setTimeout(() => {
        window.location.href = "/products";
      }, 1000);
    } catch (error) {
      console.error("Error al actualizar producto:", error);
      setMensaje("❌ Error al actualizar producto");
    }

    setLoading(false);
  };

  if (!product) return <p className="text-center mt-6 text-gray-700">Cargando...</p>;

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-sky-100 py-6">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Actualizar Producto</h2>

        {mensaje && (
          <p className={`text-center text-sm ${mensaje.includes("✅") ? "text-green-600" : "text-red-600"}`}>
            {mensaje}
          </p>
        )}

        <form onSubmit={handleUpdate} className="space-y-3">
          <input
            type="text"
            value={product.nombre}
            onChange={(e) => setProduct({ ...product, nombre: e.target.value })}
            placeholder="Nombre"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <input
            type="number"
            value={product.precio}
            onChange={(e) => setProduct({ ...product, precio: e.target.value })}
            placeholder="Precio"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <textarea
            value={product.descripcion}
            onChange={(e) => setProduct({ ...product, descripcion: e.target.value })}
            placeholder="Descripción"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />

          <input
            type="number"
            value={product.stock}
            onChange={(e) => setProduct({ ...product, stock: e.target.value })}
            placeholder="Stock"
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-sky-600 text-white py-3 rounded-xl font-semibold hover:bg-sky-700 disabled:opacity-50"
          >
            {loading ? "Actualizando..." : "Actualizar Producto"}
          </button>
        </form>
      </div>
    </div>
  );
}