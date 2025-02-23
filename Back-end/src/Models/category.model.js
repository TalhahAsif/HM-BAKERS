import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("category", CategorySchema);
export default Category;
