const Route = require('express').Router();
const { getOrders, getOrder, postOrder, putOrder, deleteOrder } = require('../controllers/ordersController')

// GET to see all the orders in the shop
Route.get('/', getOrders);

// GET just one orders of the shop
Route.get('/:name', getOrder);

// POST to update the shop with a new order
Route.post('/', postOrder);

// PUT to update the price of the specific order
Route.put('/:name', putOrder);

//DELETE one of the orders of the shop 
Route.delete('/:name', deleteOrder);

module.exports = Route