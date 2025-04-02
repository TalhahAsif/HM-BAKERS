import React, { useState } from "react";
import { X, Share2, Plus, Minus, ShoppingCart } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

export function ProductModal({ isOpen, onClose }) {
  const [quantity, setQuantity] = useState(1);
  const [instructions, setInstructions] = useState("");

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] p-0 gap-0 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="w-full md:w-[450px] h-[450px] bg-gray-100">
            <img
              src="/fererro-tart.jpg"
              alt="Fererro Tart"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 p-6 flex flex-col">
            <DialogHeader className="flex flex-row items-start justify-between">
              <DialogTitle className="text-2xl font-bold">
                Fererro Tart
              </DialogTitle>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-100 h-8 w-8"
                >
                  <Share2 className="h-4 w-4 text-red-600" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-gray-100 h-8 w-8"
                  onClick={onClose}
                >
                  <X className="h-4 w-4 text-red-600" />
                </Button>
              </div>
            </DialogHeader>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 line-through">Rs. 225</span>
                <span className="text-xl font-semibold">Rs. 203</span>
              </div>
              <p className="text-gray-600 mt-2">
                Crunchy, creamy, and chocolate-hazelnut perfection.
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">
                Special Instructions
              </h3>
              <Textarea
                placeholder="Please enter instructions about this item"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                className="resize-none"
                rows={4}
              />
            </div>

            <div className="mt-auto pt-6 flex items-center">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={decreaseQuantity}
                  className="h-10 w-10 rounded-none"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-12 h-10 text-center border-none"
                  min={1}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={increaseQuantity}
                  className="h-10 w-10 rounded-none text-white bg-red-600 hover:bg-red-700"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button className="ml-4 flex-1 bg-red-600 hover:bg-red-700 text-white">
                <span className="mr-auto">Rs. 203</span>
                <span className="flex items-center">
                  Add to Cart
                  <ShoppingCart className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

// Example usage
export default function ModalBtn({product}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mt-4">
      <span className="font-bold text-lg">${product.price.toFixed(2)}</span>

      <Button
        className="bg-black/10 hover:bg-black/20 text-gray-900 p-2 rounded-full transition-colors"
        onClick={() => setIsOpen(true)}
      >
        <ShoppingCart size={20} />
      </Button>
      <ProductModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}
