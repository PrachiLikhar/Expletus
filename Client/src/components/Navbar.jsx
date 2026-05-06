// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//   User,
//   LogIn,
//   UserPlus,
//   Menu,
//   X,
//   LayoutDashboard,
//   HomeIcon,
//   ShoppingBag,
//   PackageCheck,
// } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const location = useLocation();

//   // Scroll effect to change background
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const isActive = (path) => location.pathname === path;

//   const navLinks = [
//     { name: "Home", path: "/home", icon: <HomeIcon size={18} /> },
//     { name: "Cart", path: "/cart", icon: <ShoppingBag size={18} /> },
//     { name: "Orders", path: "/orders", icon: <PackageCheck size={18} /> },
//     { name: "Profile", path: "/profile", icon: <User size={18} /> },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${
//         scrolled
//           ? "bg-white/80 backdrop-blur-md shadow-md py-2"
//           : "bg-white py-4"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center">
//           {/* Logo Section */}
//           <div className="flex items-center">
//             <Link to="/" className="flex items-center gap-2 group">
//               <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
//                 <LayoutDashboard className="text-white" size={22} />
//               </div>
//               <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
//                 MyApp
//               </span>
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center bg-gray-50/50 p-1 rounded-2xl border border-gray-100">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
//                   isActive(link.path)
//                     ? "bg-white text-indigo-600 shadow-sm scale-105"
//                     : "text-gray-500 hover:text-indigo-500 hover:bg-white/50"
//                 }`}
//               >
//                 <span
//                   className={`${
//                     isActive(link.path) ? "animate-bounce-short" : ""
//                   }`}
//                 >
//                   {link.icon}
//                 </span>
//                 {link.name}
//                 {isActive(link.path) && (
//                   <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></span>
//                 )}
//               </Link>
//             ))}

//             {/* Auth Buttons Split */}
//             <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

//             <Link
//               to="/register"
//               className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all"
//             >
//               Join Now
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-indigo-600 transition-colors"
//             >
//               {isOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation Menu */}
//       <div
//         className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
//           isOpen
//             ? "max-h-96 opacity-100 border-t border-gray-100"
//             : "max-h-0 opacity-0"
//         } bg-white`}
//       >
//         <div className="px-4 pt-2 pb-6 space-y-2">
//           {navLinks.map((link) => (
//             <Link
//               key={link.path}
//               to={link.path}
//               onClick={() => setIsOpen(false)}
//               className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-bold transition-all ${
//                 isActive(link.path)
//                   ? "bg-indigo-50 text-indigo-600"
//                   : "text-gray-600 hover:bg-gray-50"
//               }`}
//             >
//               {link.icon}
//               {link.name}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  User,
  Menu,
  X,
  LayoutDashboard,
  HomeIcon,
  ShoppingBag,
  PackageCheck,
  Heart, // ✅ Wishlist icon add
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  // ✅ Wishlist link added here
  const navLinks = [
    { name: "Home", path: "/home", icon: <HomeIcon size={18} /> },
    { name: "Cart", path: "/cart", icon: <ShoppingBag size={18} /> },
    { name: "Wishlist", path: "/wishlist", icon: <Heart size={18} /> },
    { name: "Orders", path: "/orders", icon: <PackageCheck size={18} /> },
    { name: "Profile", path: "/profile", icon: <User size={18} /> },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-gradient-to-tr from-indigo-600 to-purple-600 p-2 rounded-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all">
                <LayoutDashboard className="text-white" size={22} />
              </div>
              <span className="text-2xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                MyApp
              </span>
            </Link>
          </div>

          {/* Desktop */}
          <div className="hidden md:flex items-center bg-gray-50/50 p-1 rounded-2xl border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-white text-indigo-600 shadow-sm scale-105"
                    : "text-gray-500 hover:text-indigo-500 hover:bg-white/50"
                }`}
              >
                <span
                  className={`${
                    isActive(link.path) ? "animate-bounce-short" : ""
                  }`}
                >
                  {link.icon}
                </span>
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></span>
                )}
              </Link>
            ))}

            <div className="h-6 w-[1px] bg-gray-200 mx-2"></div>

            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200 transition-all"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-50 text-gray-600 hover:text-indigo-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen
            ? "max-h-96 opacity-100 border-t border-gray-100"
            : "max-h-0 opacity-0"
        } bg-white`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-4 px-4 py-3 rounded-xl text-base font-bold ${
                isActive(link.path)
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {link.icon}
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
