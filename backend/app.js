const express = require('express');
const app = express();
const port = 3000;

//import the routers
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

