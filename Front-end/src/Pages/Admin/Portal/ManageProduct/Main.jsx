import React from "react";
import SelectCmp from "../../../../CustomComponent/Select";
import { Button } from "../../../../Components/ui/button";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { AdminProductCard } from "../../../../CustomComponent/Admin_Component/adminCards";

const ManageProductMain = () => {
  const products = [
    {
      id: 1,
      name: "Chocolate Chip Cookie",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 124,
      isNew: false,
      stock: 150,
      category: "Classic",
      status: "active",
      createdAt: "2024-11-10",
      updatedAt: "2025-03-01",
    },
    {
      id: 2,
      name: "Double Chocolate Cookie",
      price: 3.49,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 98,
      isNew: true,
      stock: 80,
      category: "Chocolate",
      status: "active",
      createdAt: "2025-01-15",
      updatedAt: "2025-03-10",
    },
    {
      id: 3,
      name: "Oatmeal Raisin Cookie",
      price: 2.79,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 87,
      isNew: false,
      stock: 60,
      category: "Healthy",
      status: "inactive",
      createdAt: "2024-09-01",
      updatedAt: "2025-01-20",
    },
    {
      id: 4,
      name: "Peanut Butter Cookie",
      price: 3.29,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 156,
      isNew: true,
      stock: 120,
      category: "Nutty",
      status: "active",
      createdAt: "2025-02-01",
      updatedAt: "2025-03-25",
    },
    {
      id: 5,
      name: "White Chocolate Macadamia Cookie",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 112,
      isNew: false,
      stock: 100,
      category: "Premium",
      status: "active",
      createdAt: "2024-12-12",
      updatedAt: "2025-02-18",
    },
    {
      id: 6,
      name: "Sugar Cookie",
      price: 2.49,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.4,
      reviews: 75,
      isNew: true,
      stock: 90,
      category: "Classic",
      status: "inactive",
      createdAt: "2025-01-01",
      updatedAt: "2025-01-10",
    },
    {
      id: 7,
      name: "Snickerdoodle Cookie",
      price: 2.89,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 99,
      isNew: false,
      stock: 70,
      category: "Classic",
      status: "active",
      createdAt: "2024-10-20",
      updatedAt: "2025-02-05",
    },
    {
      id: 8,
      name: "Red Velvet Cookie",
      price: 3.69,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 134,
      isNew: true,
      stock: 110,
      category: "Premium",
      status: "active",
      createdAt: "2025-02-10",
      updatedAt: "2025-03-15",
    },
    {
      id: 9,
      name: "Lemon Shortbread Cookie",
      price: 3.19,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 88,
      isNew: false,
      stock: 95,
      category: "Citrus",
      status: "active",
      createdAt: "2024-08-15",
      updatedAt: "2025-02-28",
    },
    {
      id: 10,
      name: "Almond Biscotti",
      price: 3.59,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 104,
      isNew: true,
      stock: 130,
      category: "Nutty",
      status: "active",
      createdAt: "2025-01-28",
      updatedAt: "2025-03-08",
    },
    {
      id: 11,
      name: "Gingerbread Cookie",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 67,
      isNew: false,
      stock: 50,
      category: "Seasonal",
      status: "inactive",
      createdAt: "2024-11-20",
      updatedAt: "2025-01-01",
    },
    {
      id: 12,
      name: "Pumpkin Spice Cookie",
      price: 3.79,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 145,
      isNew: true,
      stock: 140,
      category: "Seasonal",
      status: "active",
      createdAt: "2025-02-14",
      updatedAt: "2025-03-28",
    },
  ];
  const status = [
    { id: 1, title: "active" },
    { id: 2, title: "Inactive" },
  ];
  const categories = [
    { id: 1, title: "Chocolate Chip" },
    { id: 2, title: "Oatmeal Raisin" },
    { id: 3, title: "Peanut Butter" },
    { id: 4, title: "Sugar" },
    { id: 5, title: "Snickerdoodle" },
    { id: 6, title: "Gingerbread" },
    { id: 7, title: "Macaroon" },
    { id: 8, title: "Shortbread" },
    { id: 9, title: "Double Chocolate" },
    { id: 10, title: "White Chocolate Macadamia" },
  ];

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          <SelectCmp placeholder={"status"} data={status} />
          <SelectCmp placeholder={"Category"} data={categories} />
        </div>
        <div className="flex flex-col md:flex-row gap-5 items-center mb-4">
          <Link to={"/admin/manageinventory/manageCategory"}>
            <Button variant={"ghost"}>Manage Categories</Button>
          </Link>
          <Button variant={"outline"}>
            <Plus />
            Add Product
          </Button>
        </div>
      </div>
      <div className="flex flex-col gap-4 ">
        {products.map((product) => (
          <AdminProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ManageProductMain;
