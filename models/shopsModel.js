
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
    },
    shopLocation: {
      type: String,
      required: false,
    },
    shopEmail: {
      type: String,
      required: true,
    },
    
    shopContact:{
      type: String,
      required:false
    },
    RegCertificate:{
      type:Array,
    },
    agreementDoc:{
      type:Array,
    },
    images:{
      type:Array,
    }

  },
  {
    timestamps: true,
  }
);

const Shop = model("Shop", shopSchema);

export default Shop;
