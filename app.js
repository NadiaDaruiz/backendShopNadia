const express = require('express');
const mongoose = require('mongoose');
const createError = require('http-errors');
const { setCors } = require('./middleware/chrome')



// const db = require('./model/db');

const indexRoute = require('./routes/productsRoute');
const productsRoute = require('./routes/productsRoute');
const ordersRoute = require('./routes/ordersRoute');
const usersRoute = require('./routes/usersRoute');

// Server
const app = express();

// Middleware
app.use(express.json());
app.use(setCors)

// Port
const port = process.env.PORT || 4000;


mongoose.connect('mongodb://127.0.0.1:27017/fruit-shop', { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', (err) => console.log(err))
mongoose.connection.on('open', () => console.log('database connected'))


//  ROUTES 
app.use('/', indexRoute);
app.use('/shop/products', productsRoute);
app.use('/shop/orders', ordersRoute);
app.use('/shop/users', usersRoute);

// ERROR HANDLER - this func goes at the end cause in the case non of the previous work
app.use((req, res, next) => {
    next(createError(404))
})

// UNIVERSAL ERROR CATCHER - this func is good to catch any error from any func
app.use((err, req, res, next) => {
    res.json({ status: err.status, err: err.message })
})


app.listen(port, () => console.log('Listening to port:', port))