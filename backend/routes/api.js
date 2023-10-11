import express from 'express';
import authRoutes from './auth.js';
import orderRoutes from './order.js';
import productRoutes from './product.js';
import cartRoutes from './cart.js';

const apiRouter = express.Router()

apiRouter.use('/auth', authRoutes);
apiRouter.use('/orders', orderRoutes);
apiRouter.use('/products', productRoutes);
apiRouter.use('/cart', cartRoutes);

export default apiRouter;
