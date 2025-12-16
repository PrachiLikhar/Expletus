import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  const [cartCount, setCartCount] = useState(0);
  const [userToken, setUserToken] = useState(
    localStorage.getItem("token") || ""
  );

  const API_BASE = "http://localhost:5000"; // <-- apna backend URL use karo

  // --------------------------
  // //   // LOGIN FUNCTION
  // //   // --------------------------
  const login = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (data.user) {
      setIsLoggedIn(true);
      setUser(data.user);
    }
    return data;
  };

  // REGISTER
  // --------------------------
  const register = async (name, email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  };
  // Logout
  // --------------------------
  const logout = async () => {
    await fetch("http://localhost:5000/api/auth/logout", {
      method: "POST",
      credentials: "include",
    });

    setIsLoggedIn(false);
    setUser(null);
  };

  // -------------------------------------------------------------
  // SIGNUP FUNCTION
  // -------------------------------------------------------------
  const signupUser = async (name, email, password) => {
    try {
      const res = await fetch(`${API_BASE}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();
      if (!data.success) return alert(data.message || "Signup failed");

      return true;
    } catch (error) {
      console.error("Signup error:", error);
      return false;
    }
  };

  // -------------------------------------------------------------
  // FETCH PRODUCTS
  // -------------------------------------------------------------
  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await fetch(`${API_BASE}/api/products`);
      const data = await res.json();

      setProducts(data.products || []);
      setLoadingProducts(false);
    } catch (error) {
      setLoadingProducts(false);
      console.error("Fetch products error:", error);
    }
  };
  // const fetchProducts = async () => {
  //   setLoadingProducts(true);
  //   const res = await fetch(`${API_BASE}/api/products`);
  //   const data = await res.json();
  //   setProducts(data.products || []);
  //   setLoadingProducts(false);
  // };

  useEffect(() => {
    fetchProducts();
  }, []);
  /* ================= FETCH ALL PRODUCTS ================= */
  //  const fetchAllProducts = async () => {
  //   try {
  //     setLoadingProducts(true);

  //     const res = await fetch(`${API_BASE}/api/products`);
  //     if (!res.ok) throw new Error("Backend not running");

  //     const data = await res.json();
  //     setProducts(data.products || []);
  //   } catch (error) {
  //     console.error("❌ Backend not reachable:", error.message);
  //   } finally {
  //     setLoadingProducts(false);
  //   }
  // };

  /* ================= FETCH BY CATEGORY ================= */
  // const fetchProductsByCategory = async (category) => {
  //   try {
  //     setLoadingProducts(true);

  //     const res = await fetch(
  //       `${API_BASE}/api/products?category=${encodeURIComponent(category)}`
  //     );
  //     if (!res.ok) throw new Error("Backend not running");

  //     const data = await res.json();
  //     setProducts(data.products || []);
  //   } catch (error) {
  //     console.error("❌ Category fetch failed:", error.message);
  //   } finally {
  //     setLoadingProducts(false);
  //   }
  // };

  /* ================= CART COUNT ================= */
  // const updateCartCount = async () => {
  //   try {
  //     const res = await fetch(`${API_BASE}/api/cart/count`, {
  //       credentials: "include",
  //     });
  //     if (!res.ok) return;

  //     const data = await res.json();
  //     setCartCount(data.count || 0);
  //   } catch (error) {
  //     console.log("Cart count error:", error);
  //   }
  // };

  /* ================= INITIAL LOAD ================= */
  useEffect(() => {
    fetchAllProducts();
    updateCartCount();
  }, []);

  const fetchAllProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingProducts(false);
    }
  };
  // const fetchAllProducts = async () => {
  //   try {
  //     setLoadingProducts(true);

  //     const res = await fetch(`${API_BASE}/api/products`);
  //     if (!res.ok) throw new Error("Backend not reachable");

  //     const data = await res.json();
  //     setProducts(data.products || []);
  //   } catch (error) {
  //     console.error("❌ Fetch products failed:", error);
  //   } finally {
  //     setLoadingProducts(false);
  //   }
  // };

  // const fetchProductsByCategory = async (category) => {
  //   setLoadingProducts(true);

  //   try {
  //     const res = await fetch(
  //       `http://localhost:5000/api/products?category=${encodeURIComponent(
  //         category
  //       )}`
  //     );

  //     const data = await res.json();
  //     setProducts(data.products || []); // 🔥 MUST update products
  //   } catch (error) {
  //     console.log("Category fetch error:", error);
  //   } finally {
  //     setLoadingProducts(false);
  //   }
  // };
  const fetchProductsByCategory = async (category) => {
    try {
      setLoadingProducts(true);

      const res = await fetch(
        `${API_BASE}/api/products?category=${encodeURIComponent(category)}`
      );
      if (!res.ok) throw new Error("Backend not reachable");

      const data = await res.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("❌ Category fetch failed:", error);
    } finally {
      setLoadingProducts(false);
    }
  };

  // -------------------------------------------------------------
  // CART COUNT (increase/decrease)
  // -------------------------------------------------------------
  // const updateCartCount = async (productId) => {
  //   if (!userToken) return alert("Please login first!");

  //   try {
  //     const res = await fetch(`${API_BASE}/cart/add`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${userToken}`,
  //       },
  //       body: JSON.stringify({ productId }),
  //     });

  //     const data = await res.json();
  //     if (!data.success) return alert(data.message);

  //     setCartCount(data.cartCount); // backend cart count return karega
  //   } catch (error) {
  //     console.error("Cart update error:", error);
  //   }
  // };
  const updateCartCount = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/cart/count`, {
        credentials: "include",
      });

      if (!res.ok) return;

      const data = await res.json();
      setCartCount(data.count || 0);
    } catch (error) {
      console.log("Cart count error:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
    if (userToken) {
      updateCartCount(); // Fetch count only if user might be logged in
    }
  }, [userToken]);

  // -------------------------------------------------------------
  // AUTO LOGIN IF TOKEN EXISTS
  // -------------------------------------------------------------
  useEffect(() => {
    if (userToken) {
      setIsLoggedIn(true);
      // Future: decode JWT for user info
    }
  }, [userToken]);

  // -------------------------------------------------------------
  // FETCH PRODUCTS ON LOAD
  // -------------------------------------------------------------
  useEffect(() => {
    fetchProducts();
  }, []);

  // =====  sellerLOGOUT =====
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:5000/api/seller/logout", {
        method: "POST",
        credentials: "include", // ⭐ VERY IMPORTANT (cookie clear ke liye)
      });

      localStorage.removeItem("sellerToken"); // optional
      window.location.href = "/seller-login"; // ya "/"
    } catch (error) {
      console.log("Logout error:", error);
    }
  };

  // -------------------------------------------------------------
  // PROVIDER VALUE
  // -------------------------------------------------------------
  return (
    <StoreContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        signupUser,
        register,
        products,
        loadingProducts,

        cartCount,
        updateCartCount,
        handleLogout,
        userToken,
        logout,
        fetchAllProducts,
        fetchProductsByCategory,
        // ★ IMPORTANT: now available for SellerDashboard
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
