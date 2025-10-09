import {useState} from 'react'
import { db } from "../lib/firebase";
import {collection, addDoc, Timestamp} from 'firebase/firestore'

export default function AddProduct(){
    const [nombre, setNombre] = useState("")
    const [precio, setPrecio] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [stock, setStock] = useState("")
    const [loading, setLoading] = useState(false);
    const [mensaje, setMensaje] = useState("");

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "productos"), {
        nombre,
        precio: parseFloat(precio),
        descripcion,
        stock: parseInt(stock),
        creado: Timestamp.now()
      });

      setMensaje("✅ Producto creado con éxito");
      setNombre("");
      setPrecio("");
      setDescripcion("");
      setStock("");
      window.location.href = "/products";
    } catch (error) {
      console.error("Error al agregar producto:", error);
      setMensaje("❌ Error al crear el producto");
    }

    setLoading(false);
  };

  return (
    <div className="w-full max-w-sm bg-white rounded-xl shadow p-6 space-y-4">
      <h2 className="text-xl font-bold text-center">Crear Producto</h2>

      {mensaje && (
        <div className="text-center text-sm text-green-600">{mensaje}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Precio"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
          required
        />

        <textarea
          placeholder="Descripción"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <input
          type="number"
          placeholder="Stock"
          className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-sky-600 text-white py-2 rounded hover:bg-sky-700 disabled:opacity-50"
        >
          {loading ? "Guardando..." : "Guardar Producto"}
        </button>
      </form>
    </div>
  );
}