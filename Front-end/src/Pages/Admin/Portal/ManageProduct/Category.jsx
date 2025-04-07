import React from "react";
import { CategoryCard } from "../../../../CustomComponent/Admin_Component/adminCards";
import { Button } from "../../../../Components/ui/button";
import { CreateCategoryModal } from "../../../../CustomComponent/Admin_Component/createCategoryModal";

const Category = () => {
  const categories = [
    {
      id: 1,
      title: "Chocolate Chip",
      createdBy: "John Doe",
      image: "https://source.unsplash.com/featured/?chocolate-chip-cookie",
    },
    {
      id: 2,
      title: "Oatmeal Raisin",
      createdBy: "Jane Smith",
      image: "https://source.unsplash.com/featured/?oatmeal-raisin-cookie",
    },
    {
      id: 3,
      title: "Peanut Butter",
      createdBy: "Alice Johnson",
      image: "https://source.unsplash.com/featured/?peanut-butter-cookie",
    },
    {
      id: 4,
      title: "Sugar",
      createdBy: "Bob Williams",
      image: "https://source.unsplash.com/featured/?sugar-cookie",
    },
    {
      id: 5,
      title: "Snickerdoodle",
      createdBy: "Emily Davis",
      image: "https://source.unsplash.com/featured/?snickerdoodle-cookie",
    },
    {
      id: 6,
      title: "Gingerbread",
      createdBy: "Daniel Garcia",
      image: "https://source.unsplash.com/featured/?gingerbread-cookie",
    },
    {
      id: 7,
      title: "Macaroon",
      createdBy: "Sophia Martinez",
      image: "https://source.unsplash.com/featured/?macaroon",
    },
    {
      id: 8,
      title: "Shortbread",
      createdBy: "Michael Brown",
      image: "https://source.unsplash.com/featured/?shortbread-cookie",
    },
    {
      id: 9,
      title: "Double Chocolate",
      createdBy: "Olivia Wilson",
      image: "https://source.unsplash.com/featured/?double-chocolate-cookie",
    },
    {
      id: 10,
      title: "White Chocolate Macadamia",
      createdBy: "Liam Taylor",
      image: "https://source.unsplash.com/featured/?white-chocolate-cookie",
    },
  ];

  return (
    <div>
      <section className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Manage Categories</h1>
        <CreateCategoryModal />
      </section>
      <section>
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </section>
    </div>
  );
};

export default Category;
