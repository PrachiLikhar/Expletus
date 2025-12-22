import { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

const API_BASE = "http://localhost:5000";

export const StoreProvider = ({ children }) => {
  // ================= AUTH STATES =================
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [user, setUser] = useState(null);

  // ================= PRODUCT STATES =================
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);

  // ================= CART =================
  const [cartCount, setCartCount] = useState(
    Number(localStorage.getItem("cartCount")) || 0
  );

  // ================= SYNC CART COUNT =================
  useEffect(() => {
    localStorage.setItem("cartCount", cartCount);
  }, [cartCount]);

  // ================= RESTORE AUTH ON REFRESH =================
  useEffect(() => {
    const token = localStorage.getItem("token");
    const seller = localStorage.getItem("isSeller");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setIsLoggedIn(true);
      setIsSeller(seller === "true");
      setUser(JSON.parse(storedUser));
    } else {
      setIsLoggedIn(false);
      setIsSeller(false);
      setUser(null);
    }
  }, []);

  // ================= LOGIN =================
  const login = async (email, password) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (data.user && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("isSeller", data.user.role === "seller");
      localStorage.setItem("user", JSON.stringify(data.user)); // 🔥 IMPORTANT

      setUser(data.user);
      setIsLoggedIn(true);
      setIsSeller(data.user.role === "seller");
    }

    return data;
  };

  // ================= REGISTER =================
  const register = async (name, email, password) => {
    const res = await fetch(`${API_BASE}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ name, email, password }),
    });

    return await res.json();
  };

  // ================= LOGOUT =================
  const logout = async () => {
    await fetch(`${API_BASE}/api/auth/logout`, {
      method: "POST",
      credentials: "include",
    });

    localStorage.clear();
    setIsLoggedIn(false);
    setIsSeller(false);
    setUser(null);
    setCartCount(0);
  };

  // ================= FETCH ALL PRODUCTS =================
  const fetchProducts = async () => {
    try {
      setLoadingProducts(true);
      const res = await fetch(`${API_BASE}/api/products`);
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log("Product fetch error:", err);
    } finally {
      setLoadingProducts(false);
    }
  };

  useEffect(() => {
    fetchProducts();
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

  // ================= FETCH BY CATEGORY =================
  const fetchProductsByCategory = async (category) => {
    try {
      setLoadingProducts(true);
      const res = await fetch(
        `${API_BASE}/api/products?category=${encodeURIComponent(category)}`
      );
      const data = await res.json();
      setProducts(data.products || []);
    } catch (err) {
      console.log("Category fetch error:", err);
    } finally {
      setLoadingProducts(false);
    }
  };

  // ================= CART COUNT FROM BACKEND =================
  const updateCartCount = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/cart/count`, {
        credentials: "include",
      });

      if (!res.ok) {
        setCartCount(0);
        return;
      }

      const data = await res.json();
      setCartCount(data.count || 0);
    } catch (err) {
      console.log("Cart count error:", err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) updateCartCount();
  }, [isLoggedIn]);

  ////====seller logout============
  const handleLogout = async () => {
    await fetch(`${API_BASE}/logout`, {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/seller-login";
  };

  // ================= PROVIDER =================
  return (
    <StoreContext.Provider
      value={{
        isLoggedIn,
        isSeller,
        user,

        products,
        loadingProducts,

        cartCount,
        setCartCount,
        updateCartCount,

        login,
        register,
        logout,
        fetchProducts,
        fetchProductsByCategory,
        fetchAllProducts,
        handleLogout,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
