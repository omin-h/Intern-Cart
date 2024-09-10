const express = require('express');
const app = express();
const port = 3000;

//import the routes
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

//use the routes
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});