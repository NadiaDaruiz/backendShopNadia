const Route = require('express').Router();
const { getOrders, getOrder, postOrder, putOrder, deleteOrder } = require('../controllers/ordersController')

const auth = require('../middleware/authenticator');
const isAdmin = require('../middleware/rolesAuthenticator');



// GET to see all the orders in the shop
Route.get('/', auth, isAdmin, getOrders);

// GET just one orders of the shop
Route.get('/:id', auth, getOrder);

// POST to update the shop with a new order
Route.post('/', auth, postOrder);

// PUT to update the price of the specific order
Route.put('/:id', auth, putOrder);

//DELETE one of the orders of the shop 
Route.delete('/:id', auth, deleteOrder);

module.exports = Route