import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Star } from "lucide-react";
import ModalBtn from "./ProductModal";

const SpecsCard = ({ title, description }) => {
  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const CategoryCard = ({ category }) => {
  return (
    <Link
      key={category.id}
      to={`/store/categories/single`}
      className="group relative rounded-lg overflow-hidden bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-all"
    >
      <div className="p-6 flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center mb-4">
          <img
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            className="w-10 h-10"
          />
        </div>
        <h3 className="font-medium text-lg">{category.name}</h3>
        <p className="text-sm text-gray-600">{category.count} products</p>
      </div>
    </Link>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="group rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-all"
    >
      {/* <section> */}

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
            <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
          </div>
          <span className="text-xs text-gray-500">
            ({product.reviews} reviews)
          </span>
        </div>
        {/* </section> */}

        <ModalBtn product={product} />
      </div>
    </div>
  );
};

const Cart_Card = ({product}) => {
  return (
    <div>
      <Card className="max-w-sm bg-white shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-40 object-cover rounded-lg"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold">
            {product.name}
          </CardTitle>
          <CardDescription className="text-gray-500">
            Quantity: {product.quantity}
          </CardDescription>
          <p className="text-lg font-bold text-purple-600 mt-2">
            Total: ${product.totalPrice}
          </p>
        </CardContent>
        <CardFooter className="p-4 text-gray-500">
          Order ID: #{product.productId}
        </CardFooter>
      </Card>
    </div>
  );
};

export { SpecsCard, CategoryCard, ProductCard, Cart_Card };
