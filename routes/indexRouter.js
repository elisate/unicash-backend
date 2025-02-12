
import express from 'express';
import shopRouter from './shopRouter.js';
const mainRouter = express.Router();

mainRouter.use('/shop', shopRouter);
export default mainRouter;