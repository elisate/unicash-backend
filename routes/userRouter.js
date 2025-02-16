import express from "express";
import {addProductToShop } from '../controllers/productController.js'
import configureMulter from "../utils/multer.js";
import { Admin } from "../middlewares/roleControl.js";
import { loginUser,registerUser } from "../controllers/userController.js";

const userRouting = express.Router();
userRouting.post('/Login',loginUser);
userRouting.post('/Register',registerUser);
export default userRouting;