const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

app.use(cors());

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