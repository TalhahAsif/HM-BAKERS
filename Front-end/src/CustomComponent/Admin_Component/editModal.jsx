import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const EditModal = ({ product }) => {
  const [preview, setPreview] = useState(product.image);
  const [formData, setFormData] = useState({
    name: product.name,
    category: product.category,
    price: product.price,
    stock: product.stock,
    image: product.image,
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission (API call or state update)
    console.log("Updated Product:", formData);
  };

  return (
    <Dialog>
      <DialogTrigger className="w-full text-start px-2 text-sm">
        Edit
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Product</DialogTitle>
          <DialogDescription>
            Make changes to the product and save.
          </DialogDescription>
        </DialogHeader>

        <div className="flex items-center gap-4">
          <img
            src={preview}
            alt="Product Preview"
            className="w-20 h-20 rounded-md object-cover border"
          />
          <div className="grid gap-1">
            <Label htmlFor="image">Update Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </div>

        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="price">Price</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="stock">Stock</Label>
            <Input
              id="stock"
              name="stock"
              type="number"
              value={formData.stock}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button onClick={handleSubmit} className="mt-2">
          Save Changes
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default EditModal;
