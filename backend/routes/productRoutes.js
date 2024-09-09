const express = require('express');
const router = express.Router();

//Hard Coded Product data
const products = require('../data/products');

// GET products
router.get('/', (req, res ) => {
    res.json(products);
});

module.exports = router;