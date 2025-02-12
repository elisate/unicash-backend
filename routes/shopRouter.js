import express from "express";
import { createShop,deleteShop,getShopById,updateShop,getShops  } from '../controllers/shopController.js'
const shopRouter = express.Router();
shopRouter.post('/createShop', createShop);
shopRouter.delete("/deleteShop",deleteShop);
shopRouter.put("/updateShop",updateShop);
shopRouter.get("/getShopById",getShopById);
shopRouter.get("/getShops",getShops);


export default shopRouter;