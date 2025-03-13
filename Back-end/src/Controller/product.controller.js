import Product from "../Models/Product.model.js";

export const addProduct = async (req, res) => {
  const { title, description, category, price, quantity, createdby } = req.body;
  try {
    if (!title || !description || !category || !quantity || !price) {
      return res.status(500).json({
        message: "Please fill all the fields",
      });
    }

    console.log(title);

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
