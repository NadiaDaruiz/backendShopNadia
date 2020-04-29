const Route = require('express').Router();
const { getUsers, getUser, postUser, putUser, deleteUser, loginUser } = require('../controllers/usersController')
const { validInputs } = require('../middleware/validation');


// GET to see all the Users in the shop
Route.get('/', getUsers);

// GET just one User of the shop
Route.get('/:id', getUser);

// POST to update the shop with a new User
Route.post('/', validInputs(), postUser);
Route.post('/login', loginUser);

// PUT to update the price of the specific User
Route.put('/:id', validInputs(), putUser);

//DELETE one of the Users of the shop 
Route.delete('/:id', deleteUser);

module.exports = Route