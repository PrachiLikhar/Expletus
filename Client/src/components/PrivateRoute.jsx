import { useEffect, useState } from "react";
import API from "../services/api";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    API.get("/auth/profile")
      .then(() => setIsAuth(true))
      .catch(() => setIsAuth(false));
  }, []);

  if (isAuth === null) return <h1>Loading...</h1>;

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
