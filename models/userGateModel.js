import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema(
  {
    userEmail: { type: String, required: true, unique: true },
    userNames: { type: String, required: true },
    password: { type: String, required: true }, // Secure user authentication
    userRole: {
      type: String,
      required: true,
      enum: ["Admin", "ShopOwner", "Student"],
      default: "Student",
    },
    images: { type: Array, required: false },
  },
  { timestamps: true }
);

const GateUser = model("GateUser", userSchema);
export default GateUser;
