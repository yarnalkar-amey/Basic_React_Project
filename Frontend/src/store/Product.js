import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  getProducts: async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to fetch products");

      set({ products: data.data }); // backend returns array of products
    } catch (err) {
      console.error("Error fetching products:", err.message);
    }
  },

  createNewProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.imageURL) {
      return { success: false, message: "Please fill all the requirements." };
    }

    try {
      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Something went wrong.",
        };
      }

      // Update state
      set((state) => ({
        products: [...state.products, data.data], // backend sends { success, data }
      }));

      return { success: true, product: data.data };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

  deleteProduct: async (productId) => {
    if (!productId) {
      return { success: false, message: "Please provide the product id" };
    }

    try {
      const res = await fetch(
        `http://localhost:5000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok) {
        return {
          success: false,
          message: data.message || "Failed to delete product.",
        };
      }

      // Update store after success
      set((state) => ({
        products: state.products.filter((product) => product._id !== productId),
      }));

      return { success: true, message: "Product deleted successfully." };
    } catch (error) {
      return { success: false, message: error.message };
    }
  },

updateProduct: async (pid, updatedProduct) => {
  if (!pid || !updatedProduct) {
    return { success: false, message: "Provide valid arguments" };
  }

  try {
    const res = await fetch(`http://localhost:5000/api/products/${pid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();

    if (!res.ok) {
      return { success: false, message: data.message || "Failed to update the product" };
    }

    // update zustand state
    set((state) => ({
      products: state.products.map((p) =>
        p._id === pid ? { ...p, ...data.data } : p
      ),
    }));

    return { success: true, product: data.data };
  } catch (error) {
    return { success: false, message: error.message };
  }
},

}));
