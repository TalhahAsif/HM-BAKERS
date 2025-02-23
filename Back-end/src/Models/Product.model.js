import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    discription: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    createdby: {
      type: Schema.Types.ObjectId,
      ref: "admins",
      required: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("product", ProductSchema);

export default Product;
