import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SellerEntry() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = document.cookie.includes("seller_token");

    if (token) {
      navigate("/seller/dashboard");
    } else {
      navigate("/seller/register");
    }
  }, []);

  return <p className="text-white text-center mt-10">Loading...</p>;
}
