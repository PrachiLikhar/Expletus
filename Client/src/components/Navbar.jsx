// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <Link to="/">Login</Link>
//       <Link to="/register">Register</Link>
//       <Link to="/profile">Profile</Link>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  LogIn,
  UserPlus,
  Menu,
  X,
  LayoutDashboard,
  HomeIcon,
  ShieldX,
  CarTaxiFront,
  ListOrderedIcon,
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to check active route
  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/home", icon: <HomeIcon size={18} /> },
    { name: "Login", path: "/", icon: <LogIn size={18} /> },
    { name: "Register", path: "/register", icon: <UserPlus size={18} /> },
    { name: "Profile", path: "/profile", icon: <User size={18} /> },
    { name: "Cart", path: "/cart", icon: <CarTaxiFront size={18} /> },
    { name: "orders", path: "/orders", icon: <ListOrderedIcon size={18} /> },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-indigo-600 p-2 rounded-lg group-hover:rotate-12 transition-transform">
                <LayoutDashboard className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MyApp
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-indigo-50 text-indigo-600 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? "bg-indigo-50 text-indigo-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-indigo-600"
                }`}
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
