import { Menu, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../assets/cookie.png";
import Footer from "../../../CustomComponent/Footer";
import { Button } from "../../../Components/ui/button";

export default function StoreLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [user, setUser] = useState(false);

  const navLinks = [
    { title: "Home", link: "/store" },
    { title: "All Products", link: "/store/categories" },
    { title: "Contact Us", link: "/contactUs" },
  ];

  const cartItemCount = 3;

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <div>
      <section className="sticky z-50 top-0 flex justify-center items-center">
        <nav
          className={`relative flex items-center px-6 py-3 w-full shadow-xl backdrop-blur-xl  bg-white/10`}
        >
          <div className="flex items-center justify-between w-full gap-6">
            <section className="flex justify-between w-[55%]">
              <div className="flex items-center gap-4">
                <button
                  className="md:hidden text-gray-900"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu size={24} />
                </button>
                <img src={logo} className="w-12 h-12" alt="Logo" />
              </div>

              <div
                className={`hidden md:static top-full left-0 w-full md:w-auto md:flex items-center gap-5 p-4 md:p-0 rounded-b-lg transition-all duration-300 ease-in-out`}
              >
                {navLinks.map((data, index) => (
                  <Link
                    to={data.link}
                    key={index}
                    className="block md:inline py-2 md:py-0 text-gray-900 hover:text-gray-900 dark:hover:text-gray-300"
                  >
                    {data.title}
                  </Link>
                ))}
              </div>
            </section>

            <section className="flex gap-10">
              {/* Search Bar */}
              <form
                onSubmit={handleSearch}
                className="flex-1 max-w-md hidden md:flex items-center relative"
              >
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 px-4 pr-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 text-gray-500 hover:text-gray-700"
                >
                  <Search size={18} />
                </button>
              </form>

              <div className="flex items-center gap-4">
                {/* Shopping Cart */}
                <Link to={"/store/cart"} className="relative text-gray-900">
                  <ShoppingCart size={24} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>

              </div>
            </section>
          </div>
        </nav>

        {isMenuOpen && (
          <div
            className={`absolute block md:hidden top-full left-1/2 transform -translate-x-1/2
                w-full md:w-auto items-center gap-5 p-4 md:p-0 
                rounded-b-lg transition-all duration-300 ease-in-out shadow-xl bg-black/10`}
          >
            {/* Mobile Search Bar */}
            <form
              onSubmit={handleSearch}
              className="flex items-center relative mb-4"
            >
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 px-4 pr-10 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
              <button
                type="submit"
                className="absolute right-3 text-gray-500 hover:text-gray-700"
              >
                <Search size={18} />
              </button>
            </form>

            {navLinks.map((data, index) => (
              <Link
                to={data.link}
                key={index}
                className="block md:inline py-2 md:py-0 text-gray-900 hover:text-gray-900 dark:hover:text-gray-300"
              >
                {data.title}
              </Link>
            ))}
          </div>
        )}
      </section>
      <section>
        <Outlet />
      </section>

      <Footer />
    </div>
  );
}
