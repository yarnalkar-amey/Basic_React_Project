import ProductModel from "../Models/Product.model.js";


export const postProduct = async (req, res) => {
  const product = req.body;

  // Simple validation
  if (!product.name || !product.price || !product.imageURL) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide valid data" });
  }

  const newProduct = new ProductModel(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}

export const getProduct = async (req, res) => {
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Product ID" });
  }
}

export const deleteProduct =  async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ success: false, message: "Bad Request" });
  }

  try {
    const deleted = await ProductModel.findByIdAndDelete(id);
    if (!deleted) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ success: false, message: "Invalid Product ID" });
  }
}

export const updateProduct =  async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // return updated doc, validate schema
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(400).json({ success: false, message: "Invalid Product ID" });
  }
}