import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/Components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Tag,
  Star,
  Trash2,
  Truck,
} from "lucide-react";
import ModalBtn from "./ProductModal";
import { Input } from "@/Components/ui/input";
import { Separator } from "@radix-ui/react-select";

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

const Cart_Card = ({ product, onUpdateQuantity, onRemove }) => {
  return (
    <Card className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 transition-all hover:shadow-md flex flex-col md:flex-row items-center p-4 w-full">
      <CardHeader className="p-0 w-40 flex-shrink-0">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          className="w-full h-32 object-cover rounded-lg"
        />
      </CardHeader>

      {/* Content Section */}
      <section className="flex justify-between w-full">
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl font-semibold line-clamp-1">
            {product.name}
          </CardTitle>
          <div className="flex items-center flex-wrap justify-between mt-3">
            <div className="flex items-center border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  onUpdateQuantity(product.productId, product.quantity - 1)
                }
                disabled={product.quantity <= 1}
                className="h-8 w-8 rounded-none"
              >
                <Minus className="h-3 w-3" />
              </Button>
              <span className="w-8 text-center">{product.quantity}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  onUpdateQuantity(product.productId, product.quantity + 1)
                }
                className="h-8 w-8 rounded-none"
              >
                <Plus className="h-3 w-3" />
              </Button>
            </div>
            <p className="text-lg font-bold text-rose-600">
              ${product.totalPrice}
            </p>
          </div>
        </CardContent>

        {/* Footer Section */}
        <CardFooter className="p-4 flex flex-col items-center justify-center border-l">
          <Button
            variant="ghost"
            size="sm"
            className="text-rose-500 hover:text-rose-700 hover:bg-rose-50 p-0 h-8 w-8"
            onClick={() => onRemove(product.productId)}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </CardFooter>
      </section>
    </Card>
  );
};

const OrderSummaryCard = ({
  promoCode,
  promoApplied,
  handleApplyPromo,
  shippingMethod,
  setShippingMethod,
  subtotal,
  tax,
  shippingCost,
  total,
}) => {
  return (
    <div className="lg:col-span-1 sticky top-30 right-10 h-fit">
      <Card className="bg-white shadow-sm border border-gray-100">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Promo Code */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Promo Code</label>
            <div className="flex space-x-2">
              <Input
                placeholder="Enter code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                disabled={promoApplied}
              />
              <Button
                onClick={handleApplyPromo}
                disabled={promoApplied || !promoCode}
                className="whitespace-nowrap"
              >
                <Tag className="mr-2 h-4 w-4" />
                Apply
              </Button>
            </div>
            {promoApplied && (
              <p className="text-sm text-green-600">
                Promo code applied: 10% off
              </p>
            )}
          </div>

          {/* Shipping Method */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Shipping Method</label>
            <Select value={shippingMethod} onValueChange={setShippingMethod}>
              <SelectTrigger>
                <SelectValue placeholder="Select shipping method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="standard">
                  Standard Shipping ($5.99)
                </SelectItem>
                <SelectItem value="express">
                  Express Shipping ($12.99)
                </SelectItem>
                <SelectItem value="pickup">Store Pickup (Free)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator className="my-4" />

          {/* Price Breakdown */}
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span>${shippingCost.toFixed(2)}</span>
            </div>
            {promoApplied && (
              <div className="flex justify-between text-green-600">
                <span>Discount (10%)</span>
                <span>-${discount.toFixed(2)}</span>
              </div>
            )}
          </div>

          <Separator className="my-2" />

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-rose-600 hover:bg-rose-700 py-6">
            Proceed to Checkout
          </Button>
        </CardFooter>
      </Card>

      {/* Shipping Info */}
      <div className="mt-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
        <div className="flex items-start space-x-3">
          <Truck className="h-5 w-5 text-gray-400 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">Shipping Information</h4>
            <p className="text-xs text-gray-500 mt-1">
              Free shipping on orders over $50. Standard delivery 3-5 business
              days. Express delivery 1-2 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SpecsCard, CategoryCard, ProductCard, Cart_Card, OrderSummaryCard };
