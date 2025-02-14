import Shop from "../models/shopsModel.js";
import Product from "../models/productModal.js";

export const addProductToShop = async (req, res) => {
  try {
    // No need to call upload here as it's already handled by the middleware
    const { 
      shopName, 
      productName, 
      productPrice, 
      productCategory, 
      description, 
      stockQuantity, 
      discount 
    } = req.body;

    // Check if the shop exists
    const shop = await Shop.findOne({ shopName });

    if (!shop) {
      return res.status(404).json({ message: "Shop not found" });
    }

    // Get image file paths
    const images = req.files?.images?.map(file => file.path) || [];

    // Create a new product
    const newProduct = new Product({
      productName,
      productPrice,
      productCategory,
      images, // Save image paths
      description: description || "", 
      stockQuantity: stockQuantity || 0, 
      discount: discount || 0,
      shopId: shop._id, 
    });

    // Save product to database
    await newProduct.save();

    // Update shop with new product
    shop.products.push(newProduct._id);
    await shop.save();

    res.status(201).json({ 
      message: "Product added successfully", 
      product: newProduct 
    });
  } catch (error) {
    res.status(500).json({ 
      message: "Server error", 
      error: error.message 
    });
  }
};
