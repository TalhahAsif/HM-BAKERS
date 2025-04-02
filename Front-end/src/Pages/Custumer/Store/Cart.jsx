import React from "react";
import { Cart_Card } from "../../../CustomComponent/cards";

const Cart = () => {
  const cartItems = [
    {
      productId: 1,
      name: "Chocolate Chip Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 3,
      totalPrice: (2.99 * 3).toFixed(2),
    },
    {
      productId: 4,
      name: "Peanut Butter Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 2,
      totalPrice: (3.29 * 2).toFixed(2),
    },
    {
      productId: 8,
      name: "Red Velvet Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 5,
      totalPrice: (3.69 * 5).toFixed(2),
    },
    {
      productId: 6,
      name: "Sugar Cookie",
      quantity: 4,
      image: "/placeholder.svg?height=200&width=200",
      totalPrice: (2.49 * 4).toFixed(2),
    },
    {
      productId: 12,
      name: "Pumpkin Spice Cookie",
      image: "/placeholder.svg?height=200&width=200",
      quantity: 6,
      totalPrice: (3.79 * 6).toFixed(2),
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {cartItems.map((product, index) => {
        return <Cart_Card key={index} product={product} />;
      })}
    </div>
  );
};

export default Cart;
