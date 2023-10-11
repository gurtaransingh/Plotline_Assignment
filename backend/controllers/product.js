import Product from "../models/product.js";
import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdef", 10);

// Create a new product
const createProduct = async (req, res) => {
  try {
    const { name, price, description, image, type } = req.body;
    const id = nanoid();
    const product = new Product({
      id,
      name,
      price,
      description,
      image,
      type,
    });

    await product.save();

    res.json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// Get a list of all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// Get a single product by ID
const getProductById = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOne({ id: productId });
    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }
    res.json({ success: true, product });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// Update a product by ID
const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const { name, price, description, image, type } = req.body;

    const product = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        price,
        description,
        image,
        type,
      },
      { new: true }, // Return the updated product
    );

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

// Delete a product by ID
const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const product = await Product.findByIdAndRemove(productId);

    if (!product) {
      return res.json({ success: false, message: "Product not found" });
    }

    res.json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.json({ success: false, message: "Internal server error" });
  }
};

export {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};
