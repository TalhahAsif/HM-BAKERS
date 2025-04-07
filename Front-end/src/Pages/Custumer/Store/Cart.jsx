import { useState } from "react";
import { Cart_Card, OrderSummaryCard } from "../../../CustomComponent/StoreCards";
import { Button } from "@/Components/ui/button";
import { ArrowLeft, Tag } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      productId: 1,
      name: "Chocolate Chip Cookie",
      image:
        "https://images.unsplash.com/photo-1590080874088-eec64895b423?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      quantity: 3,
      price: 2.99,
      totalPrice: (2.99 * 3).toFixed(2),
    },
    {
      productId: 4,
      name: "Peanut Butter Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 2,
      price: 3.29,
      totalPrice: (3.29 * 2).toFixed(2),
    },
    {
      productId: 8,
      name: "Red Velvet Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 5,
      price: 3.69,
      totalPrice: (3.69 * 5).toFixed(2),
    },
    {
      productId: 6,
      name: "Sugar Cookie",
      quantity: 4,
      price: 2.49,
      image: "/placeholder.svg?height=200&width=200",
      totalPrice: (2.49 * 4).toFixed(2),
    },
    {
      productId: 12,
      name: "Pumpkin Spice Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 6,
      price: 3.79,
      totalPrice: (3.79 * 6).toFixed(2),
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [shippingMethod, setShippingMethod] = useState("standard");
  const [promoApplied, setPromoApplied] = useState(false);

  // Calculate cart totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.totalPrice),
    0
  );
  const tax = subtotal * 0.08; // 8% tax
  const shippingCost =
    shippingMethod === "express"
      ? 12.99
      : shippingMethod === "standard"
      ? 5.99
      : 0;
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% discount if promo applied
  const total = subtotal + tax + shippingCost - discount;

  // Handle quantity updates
  const handleUpdateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productId === productId) {
          return {
            ...item,
            quantity: newQuantity,
            totalPrice: (item.price * newQuantity).toFixed(2),
          };
        }
        return item;
      })
    );
  };

  // Handle item removal
  const handleRemoveItem = (productId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  };

  // Handle promo code application
  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  // Empty cart state
  if (cartItems.length === 0) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <Alert className="bg-gray-50 border-gray-200">
          <div className="flex flex-col items-center justify-center py-12">
            <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
            <AlertDescription className="text-center max-w-md">
              <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Button className="bg-rose-600 hover:bg-rose-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Button>
            </AlertDescription>
          </div>
        </Alert>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Your Cart ({cartItems.length} items)
      </h1>

      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items Section */}
        <div className="lg:col-span-2">
          <div className=" flex justify-center items-center flex-col">
            {cartItems.map((product) => (
              <Cart_Card
                key={product.productId}
                product={product}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          <Button variant="outline" className="mt-6 flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </div>

        {/* Order Summary Section */}

        <OrderSummaryCard
          promoCode={promoCode}
          promoApplied={promoApplied}
          handleApplyPromo={handleApplyPromo}
          shippingMethod={shippingMethod}
          setShippingMethod={setShippingMethod}
          subtotal={subtotal}
          tax={tax}
          shippingCost={shippingCost}
          total={total}
        />
      </div>
    </div>
  );
};

export default Cart;
