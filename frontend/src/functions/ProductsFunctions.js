
import { create } from "zustand";

export const useProductsStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (
      !newProduct.name ||
      !newProduct.price ||
      !newProduct.image ||
      !newProduct.desc
    ) {
      return { success: false, message: "All fields are required" };
    }

    const res = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    const data = await res.json();
    set((state) => ({products: [...state.products, data.data]}));

    return { success: true, message: "Product created successfully" };
  },

  getProducts: async () => {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    set({ products : data.data });
  },

  deleteProduct: async (id) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    if(!data.success) return {success : false , message : data.message}

    set((state) => ({products : state.products.filter((product) => product._id !== id)}))
    return {success : true , message : data.message}
  },

  updateProduct: async (id, updatedProduct) => {
    const res = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if(!data.success) return {success : false , message : data.message}

    set((state)=>({products: state.products.map((product) => product._id === id ? data.data : product)}))
    return {success : true , message : data.message}
  }

}));
