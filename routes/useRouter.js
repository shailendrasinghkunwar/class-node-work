// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/useControllers.js');

// GET → read
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);

// POST → create
router.post('/products', productController.createProduct);

// PUT → update
router.put('/products/:id', productController.updateProduct);

// DELETE → remove
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;