import express from 'express';
import { createOrder, getOrdersByUser } from '../controllers/order.js';

const orderRouter = express.Router();

orderRouter.post('/', createOrder);
orderRouter.get('/:userId', getOrdersByUser);

export default orderRouter;
