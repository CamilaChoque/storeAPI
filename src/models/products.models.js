import { db } from "./firebase.js";

export const agregarProducto = async (product) => {
  const docRef = await db.collection("products").add(product);
  return { id: docRef.id, ...product };
};

export const obtenerProductos = async () => {
  const snapshot = await db.collection("products").get();
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const obtenerProducto = async (id) => {
  const docRef = await db.collection("products").doc(id).get();
  if (!docRef.exists) return null;
  return { id: docRef.id, ...docRef.data() };
};

export const eliminarProducto = async (id) => {
  await db.collection("products").doc(id).delete();
};
