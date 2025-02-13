import express from "express";
import { createShop,deleteShopById ,getShopById,updateShopById,getShops  } from '../controllers/shopController.js'
import configureMulter from "../utils/multer.js";
const upload=configureMulter();
const shopRouter = express.Router();
shopRouter.post('/createShop',upload, createShop);
shopRouter.delete("/deleteShopById ",deleteShopById );
shopRouter.put("/updateShopById",updateShopById);
shopRouter.get("/getShopById",getShopById);
shopRouter.get("/getShops",getShops);


export default shopRouter;