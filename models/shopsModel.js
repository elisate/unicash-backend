
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const shopSchema = new Schema(
  {
    shopName: { type: String, required: true },
    shopTIN: { type: String },
    shopLocation: { type: String },
    shopEmail: { type: String, required: true },
    shopContact: { type: String },
    ownerName: { type: String }, 
    RegCertificate: { type: Array },
    agreementDoc: { type: Array },
    images: { type: Array },
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }], 
  },
  { timestamps: true }
);

const Shop = model("Shop", shopSchema);
export default Shop;
