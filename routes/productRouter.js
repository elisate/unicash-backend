import express from "express";
import {addProductToShop } from '../controllers/productController.js'
import configureMulter from "../utils/multer.js";
import { Admin } from "../middlewares/roleControl.js";
const upload=configureMulter();
const productRouter = express.Router();
productRouter.post('/createProduct',upload,addProductToShop);
export default productRouter;