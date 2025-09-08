const express = require('express');
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/Product-controllers');

const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.post('/add', addProduct );
router.put('/update/:id', updateProduct);
router.delete('/delete/:id', deleteProduct);

module.exports = router;