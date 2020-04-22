const Route = require('express').Router();
const { indexRoute } = require('../controllers/indexController')


Route.get('/shop', indexController);