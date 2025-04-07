import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/cookie.png";
import { ShoppingCart, Menu } from "lucide-react";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Contact Us", link: "/contactUs" },
  ];

  const cartItemCount = 3; 

  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="z-50 sticky top-4 flex justify-center items-center">
        <nav
          className={`relative flex items-center px-6 py-3 w-[75%] md:rounded-xl ${
            isMenuOpen ? "rounded-t-xl" : "rounded-xl"
          } backdrop-blur-xl shadow-xl bg-black/10`}
        >
          <div className="flex items-center justify-between w-full gap-6">
            <button
              className="md:hidden text- "
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu size={24} />
            </button>
            <img src={logo} className="w-12 h-12" alt="Logo" />
            <div
              className={`hidden md:static top-full left-0 w-full md:w-auto md:flex items-center gap-5 p-4 md:p-0 rounded-b-lg transition-all duration-300 ease-in-out`}
            >
              {navLinks.map((data, index) => (
                <Link
                  to={data.link}
                  key={index}
                  className="block md:inline py-2 md:py-0 text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 "
                >
                  {data.title}
                </Link>
              ))}
            </div>

            <div className="relative text- ">
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-xs font-bold px-2 py-1 rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            className={`absolute block md:hidden top-full left-1/2 transform -translate-x-1/2 
                w-[75%] md:w-auto items-center gap-5 p-4 md:p-0 
                rounded-b-lg transition-all duration-300 ease-in-out 
                backdrop-blur-xl shadow-xl bg-black/10 md:bg-transparent `}
          >
            {navLinks.map((data, index) => (
              <Link
                to={data.link}
                key={index}   
                className="block md:inline py-2 md:py-0 text-gray-900 hover:text-gray-900 dark:hover:text-gray-300 "
              >
                {data.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div>
        <Outlet />
      </div>
    </section>
  );
};

export default Layout;
