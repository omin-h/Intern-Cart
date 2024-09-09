const express = require('express');
const router = express.Router();

//Hard Coded Catogary data
const categories = require('../data/categories'); 

// GET categories
router.get('/', (req, res ) => {
    res.json(categories);
});

module.exports = router;