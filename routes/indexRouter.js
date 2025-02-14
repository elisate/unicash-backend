
import express from 'express';
import shopRouter from './shopRouter.js';
import productRouter from './productRouter.js';
const mainRouter = express.Router();

mainRouter.use('/shop', shopRouter);
mainRouter.use("/product",productRouter);
export default mainRouter;