import Product from "../Models/Product.model";

export const addProduct = async (req, res) => {
  const { title, description, category, quantity, createdby } = req.body();
  try {
    if (!title || !description || !category || quantity) {
      res.status(500).json({
        message: "Please fill all the fields",
      });
    }

    const isExist = await Product.findOne(title);

    if (isExist) {
      res.status(400).json({
        message: "This Item already Exist",
      });
    }

    const newProduct = new Product({
      title,
      description,
      category,
      quantity,
      createdby,
    });

    if (newProduct) {
      newProduct.save();
      res.status(201).json({
        message: "Product Added",
        newProduct,
      });
    }
  } catch (error) {
    console.log("error in add category==>", error);
    res.status(500).json({
      error: true,
      message: "Some thing went wrong",
    });
  }
};
