import mongoose from "mongoose";
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    productName: { type: String, required: true },
    productPrice: { type: String, required: true },
    productCategory: { type: String, required: true },
    images: { type:Array, required: true },
    description: { type: String }, 
    stockQuantity: { type: Number, default: 0 }, 
    discount: { type: Number, default: 0 }, 
    shopId: { type: mongoose.Schema.Types.ObjectId, ref: "Shop" },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
export default Product;
