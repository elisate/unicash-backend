
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const shopSchema = new Schema(
  {
    shopName: {
      type: String,
      required: false,
      
    },
    shopTIN: {
      type: String,
      required: false,
      lowercase: true,
    },
    shopLocation: {
      type: String,
      required: false,
    },
    shopEmail: {
      type: String,
      required: true,
    },
    
    shopPhone: {
      type: String,
      required:false
    },
  },
  {
    timestamps: true,
  }
);

const Shop = model("Shop", shopSchema);

export default Shop;
