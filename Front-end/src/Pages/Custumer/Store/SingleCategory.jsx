import React from "react";
import { ProductCard } from "../../../CustomComponent/cards";

const SingleCategory = () => {
  const Products = [
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
      isNew: true,
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
      isNew: true,
    },
    {
      id: 5,
      name: "White Chocolate Macadamia Cookie",
      price: 3.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 112,
      isNew: false,
    },
    {
      id: 6,
      name: "Sugar Cookie",
      price: 2.49,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.4,
      reviews: 75,
      isNew: true,
    },
    {
      id: 7,
      name: "Snickerdoodle Cookie",
      price: 2.89,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      reviews: 99,
      isNew: false,
    },
    {
      id: 8,
      name: "Red Velvet Cookie",
      price: 3.69,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      reviews: 134,
      isNew: true,
    },
    {
      id: 9,
      name: "Lemon Shortbread Cookie",
      price: 3.19,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.5,
      reviews: 88,
      isNew: false,
    },
    {
      id: 10,
      name: "Almond Biscotti",
      price: 3.59,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.6,
      reviews: 104,
      isNew: true,
    },
    {
      id: 11,
      name: "Gingerbread Cookie",
      price: 2.99,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.3,
      reviews: 67,
      isNew: false,
    },
    {
      id: 12,
      name: "Pumpkin Spice Cookie",
      price: 3.79,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      reviews: 145,
      isNew: true,
    },
  ];

  return (
    <section className="container mx-auto my-10 ">
      <p className="text-2xl font-bold mb-10">Category Name</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {Products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default SingleCategory;
