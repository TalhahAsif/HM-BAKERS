import Product from "../Models/Product.model.js";

export const getProduct = async (req, res) => {
  try {
    req.body.function = "manage Inventory";

    const allProduct = await Product.find({})
      .populate("category")
      .populate("createdby");

    if (!allProduct || allProduct.length === 0) {
      return res.status(404).json({
        message: "No product found",
      });
    }

    return res.status(200).json({
      message: "Products found",
      allProduct,
    });
  } catch (error) {
    console.error("Error in getProduct:", error);
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
};

export const addProduct = async (req, res) => {
  const { title, description, category, price, quantity, createdby } = req.body;
  try {
    if (
      !title ||
      !description ||
      !category ||
      !quantity ||
      !price ||
      !createdby
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const isExist = await Product.findOne({ title });

    if (isExist) {
      return res.status(400).json({
        message: "This Item already Exist",
      });
    }

    const newProduct = new Product({
      title,
      description,
      category,
      quantity,
      price,
      createdby,
    });

    if (newProduct) {
      await newProduct.save();
      return res.status(201).json({
        message: "Product Added",
        newProduct,
      });
    }
  } catch (error) {
    console.log("error in add product==>", error);
    return res.status(500).json({
      error: true,
      message: "Some thing went wrong",
    });
  }
};
