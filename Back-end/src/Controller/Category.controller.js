import Category from "../Models/category.model.js";

export const addCategory = async (req, res) => {
  const { title } = req.body;
  try {
    const isExist = await Category.findOne({ title });

    if (isExist) {
      return res.status(500).json({
        message: "Category with this title already exist",
      });
    }

    const newCategory = new Category({
      title,
    });

    if (newCategory) {
      await newCategory.save();
      return res.status(201).json({
        message: "Category Added",
        newCategory,
      });
    }
  } catch (error) {
    console.log("error in add category==>", error);
    return res.status(500).json({
      error: true,
      message: "Some thing went wrong",
    });
  }
};
