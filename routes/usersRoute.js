const Route = require('express').Router();
const { getUsers, getUser, postUser, putUser, deleteUser } = require('../controllers/usersController')

// GET to see all the Users in the shop
Route.get('/', getUsers);

// GET just one Users of the shop
Route.get('/:name', getUser);

// POST to update the shop with a new User
Route.post('/', postUser);

// PUT to update the price of the specific User
Route.put('/:name', putUser);

//DELETE one of the Users of the shop 
Route.delete('/:name', deleteUser);

module.exports = Route