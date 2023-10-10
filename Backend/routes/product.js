import express from 'express';
import { createProduct, getAllProducts, getProductById, deleteProduct, updateProduct } from '../controllers/product.js';

const productRouter = express.Router();

productRouter.post('/', createProduct); // Create a new product
productRouter.get('/', getAllProducts); // Get a list of all products
productRouter.get('/:productId', getProductById); // Get a single product by ID
productRouter.delete('/:productId', deleteProduct); // Delete a product by ID
productRouter.put('/:productId', updateProduct); // Update a product by ID

export default productRouter;
