import Category from "../Models/category.model.js";

export const getCategory = async (req, res) => {
  try {
    const allCategory = await Category.find({}).populate("createdby");

    if (!allCategory || allCategory.length === 0) {
      return res.status(404).json({
        message: "No category found",
      });
    }

    return res.status(200).json({
      message: "Categories found",
      allCategory,
    });
  } catch (error) {
    console.error("Error in getCategory:", error);
    return res.status(500).json({
      error: true,
      message: "Something went wrong",
    });
  }
}

export const addCategory = async (req, res) => {
  const { title, createdby } = req.body;
  try {
    const isExist = await Category.findOne({ title });

    if (isExist) {
      return res.status(500).json({
        message: "Category with this title already exist",
      });
    }
    if (!title || !createdby) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newCategory = new Category({
      title,
      createdby,
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
