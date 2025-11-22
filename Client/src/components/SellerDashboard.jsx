import { Link } from "react-router-dom";

const SellerDashboard = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-6">
      <h1 className="text-3xl font-bold">Welcome Seller</h1>
      <p className="text-lg">Please Login or Register to continue</p>

      <div className="flex gap-4">
        <Link to="/seller/login">
          <button className="bg-green-600 text-white px-6 py-2 rounded-lg">
            Login
          </button>
        </Link>

        <Link to="/seller/register">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SellerDashboard;
