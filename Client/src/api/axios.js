import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true, // 🍪 VERY IMPORTANT
});

// ❌ NO TOKEN INTERCEPTOR NEEDED
// Cookies browser khud attach karega

export default api;
