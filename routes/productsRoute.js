const Route = require('express').Router();
const { getProducts, getProduct, postProduct, putProduct, deleteProduct } = require('../controllers/productsController')

// GET to see all the products in the shop
Route.get('/', getProducts);

// GET just one products of the shop
Route.get('/:name', getProduct);

// POST to update the shop with a new product
Route.post('/', postProduct);

// PUT to update the price of the specific product
Route.put('/:name', putProduct);

//DELETE one of the products of the shop 
Route.delete('/:name', deleteProduct);

module.exports = Route
