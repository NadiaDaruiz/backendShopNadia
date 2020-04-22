const express = require('express');
const db = require('./model/db');
const indexRoute = require('./routes/productsRoute');
const productsRoute = require('./routes/productsRoute');
const ordersRoute = require('./routes/ordersRoute');
const usersRoute = require('./routes/usersRoute');

// Server
const app = express();

// Middleware
app.use(express.json());

// Port
const port = process.env.PORT || 4000;

//  ROUTES 
app.use('/', indexRoute);
app.use('/shop/products', productsRoute);
app.use('/shop/orders', ordersRoute);
app.use('/shop/users', usersRoute);


app.listen(port, () => console.log('Listening to port:', port))