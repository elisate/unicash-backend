
import express from 'express';
import shopRouter from './shopRouter.js';
import productRouter from './productRouter.js';
import studentRouter from './studentRouter.js';
const mainRouter = express.Router();

mainRouter.use('/shop', shopRouter);
mainRouter.use("/product",productRouter);
mainRouter.use("/student",studentRouter);
export default mainRouter;