const Route = require('express').Router();
const { getProducts, getProduct, postProduct, putProduct, deleteProduct } = require('../controllers/productsController')
const auth = require('../middleware/authenticator');
const isAdmin = require('../middleware/rolesAuthenticator');




// GET to see all the products in the shop
Route.get('/', auth, getProducts);

// GET just one products of the shop
Route.get('/:id', auth, getProduct);

// POST to update the shop with a new product
Route.post('/', auth, isAdmin, postProduct);

// PUT to update the price of the specific product
Route.put('/:id', auth, isAdmin, putProduct);

//DELETE one of the products of the shop 
Route.delete('/:id', auth, isAdmin, deleteProduct);

module.exports = Route
