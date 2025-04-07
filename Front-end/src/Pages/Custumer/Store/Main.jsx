import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { CategoryCard, ProductCard } from "../../../CustomComponent/StoreCards";

export default function Main() {
  // Sample product data
  const featuredProducts = [
    {
      id: 1,
      name: "Chocolate Chip Cookie",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 124,
      isNew: false,
    },
    {
      id: 2,
      name: "Double Chocolate Cookie",
      price: 3.49,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 98,
      isNew: false,
    },
    {
      id: 3,
      name: "Oatmeal Raisin Cookie",
      price: 2.79,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 87,
      isNew: false,
    },
    {
      id: 4,
      name: "Peanut Butter Cookie",
      price: 3.29,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 156,
      isNew: false,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Chocolate",
      count: 12,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Fruit",
      count: 8,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Nut",
      count: 10,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Seasonal",
      count: 6,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  const newArrivals = [
    {
      id: 5,
      name: "White Chocolate Macadamia",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 42,
      isNew: true,
    },
    {
      id: 6,
      name: "Snickerdoodle",
      price: 2.89,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.4,
      reviews: 36,
      isNew: true,
    },
    {
      id: 7,
      name: "Red Velvet Cookie",
      price: 3.79,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 28,
      isNew: true,
    },
    {
      id: 8,
      name: "Lemon Sugar Cookie",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 19,
      isNew: true,
    },
  ];

  // Add to cart functionality
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    // In a real app, you might want to show a notification or update a global cart state
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      {/* Hero Banner */}
      <div className="relative rounded-xl overflow-hidden mb-12 ">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
        <img
          src="https://plus.unsplash.com/premium_photo-1668784193175-b16306c81100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29va2llfGVufDB8fDB8fHww"
          alt="Delicious Cookies"
          className="w-full h-[400px] object-cover"
        />
        <div className="absolute top-1/2 left-12 transform -translate-y-1/2 z-20 max-w-lg text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Freshly Baked Happiness
          </h1>
          <p className="text-lg mb-6">
            Discover our handcrafted cookies made with premium ingredients and
            baked with love.
          </p>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Categories */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Shop by Category</h2>
          <a
            href="/categories"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard category={category} />
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <Link
            to="/products"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="mb-16">
        <div className="rounded-xl overflow-hidden bg-black/10 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-sm font-medium text-gray-600 mb-2">
                Limited Time Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Buy 3 Get 1 Free
              </h2>
              <p className="text-gray-700 mb-6">
                Treat yourself to our delicious cookies and get a special
                discount when you buy 3 or more.
              </p>
              <div>
                <button className="flex items-center font-medium text-gray-900 hover:underline">
                  Shop the Collection <ArrowRight size={16} className="ml-2" />
                </button>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Cookie Collection"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">New Arrivals</h2>
          <a
            href="/new"
            className="flex items-center text-gray-600 hover:text-gray-900"
          >
            View All <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all"
            >
              <div className="relative">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                )}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg mb-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex items-center text-amber-400 mr-2">
                    <Star size={16} fill="currentColor" />
                    <span className="ml-1 text-sm text-gray-700">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="font-bold text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black/10 hover:bg-black/20 text-gray-900 p-2 rounded-full transition-colors"
                  >
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="rounded-xl bg-black/10 backdrop-blur-sm p-8 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Join Our Cookie Club
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Subscribe to our newsletter and be the first to know about new
          flavors, special offers, and exclusive discounts.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-full bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            required
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
