import expressAsyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc   Fetch all products
// @route  /api/products
// @acess  Public
export const getProducts = expressAsyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc   Fetch product by id
// @route  /api/products/:id
// @acess  Public
export const getProductById = expressAsyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
