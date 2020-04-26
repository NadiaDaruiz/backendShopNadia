const Route = require('express').Router();
const { getUsers, getUser, postUser, putUser, deleteUser } = require('../controllers/usersController')

// GET to see all the Users in the shop
Route.get('/', getUsers);

// GET just one User of the shop
Route.get('/:id', getUser);

// POST to update the shop with a new User
Route.post('/', postUser);

// PUT to update the price of the specific User
Route.put('/:id', putUser);

//DELETE one of the Users of the shop 
Route.delete('/:id', deleteUser);

module.exports = Route