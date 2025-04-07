import React from "react";
import { CategoryCard } from "../../../CustomComponent/StoreCards";

const Categories = () => {
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
    {
      id: 5,
      name: "Gluten-Free",
      count: 7,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 6,
      name: "Vegan",
      count: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 7,
      name: "Protein-Packed",
      count: 9,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 8,
      name: "Sugar-Free",
      count: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 9,
      name: "Classic",
      count: 15,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 10,
      name: "Gourmet",
      count: 11,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 11,
      name: "Soft & Chewy",
      count: 14,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 12,
      name: "Crunchy",
      count: 10,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 13,
      name: "Filled",
      count: 6,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 14,
      name: "Spiced",
      count: 7,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 15,
      name: "Coconut",
      count: 5,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 16,
      name: "Caramel",
      count: 8,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 17,
      name: "Matcha",
      count: 4,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 18,
      name: "Peanut Butter",
      count: 12,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 19,
      name: "Coffee-Flavored",
      count: 9,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 20,
      name: "Limited Edition",
      count: 3,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 21,
      name: "Mini Cookies",
      count: 13,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 22,
      name: "Brownie Cookies",
      count: 6,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 23,
      name: "Shortbread",
      count: 8,
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 24,
      name: "Snickerdoodle",
      count: 10,
      image: "/placeholder.svg?height=100&width=100",
    },
  ];

  return (
    <section className="container mx-auto my-10 ">
      <p className="text-2xl font-bold mb-10">All Categories</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {categories.map((category) => {
          return <CategoryCard key={category.id} category={category} />;
        })}
      </div>
    </section>
  );
};

export default Categories;
