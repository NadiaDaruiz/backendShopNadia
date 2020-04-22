const express = require('express');
const Joi = require('joi');
const Shop = require('./database');

// Server
const app = express();

// Middleware
app.use(express.json());

// Port
const port = process.env.PORT || 4000;

//  ROUTES 
// GET all the fruits in the shop
app.get('/shop', (req, res) => {
    res.send(Shop)
});


// GET just one fruit in the shop
app.get('/shop/:name', (req, res) => {
    console.log(req.params.name)
    let selectedFruit = Shop.find(f => f.name == req.params.name)
    res.send(selectedFruit);
});

// POST to update the shop with a new fruit
// works but does not update the database file (shop) locally 
app.post('/shop', (req, res) => {
    const newFruit = {
        name: req.body.name,
        origin: req.body.origin,
        price: req.body.price,
        soldBy: req.body.soldBy,
        qty: req.body.qty
    };

    Shop.push(newFruit);
    res.send(Shop)
    // res.send(newFruit);
});

// PUT to update the price of the specific fruit
app.put('/shop/:name', (req, res) => {
    let updateFruit = Shop.find(f => f.name == req.params.name)
    updateFruit.price = req.body.price;
    res.send(Shop)
    // res.send(updateFruit)
});

//DELETE one of the fruits of the shop
app.delete('/shop/:name', (req, res) => {
    let removeFruit = Shop.find(f => f.name == req.params.name);

    const index = Shop.indexOf(removeFruit);
    Shop.splice(index, 1);

    res.send(Shop)
    // res,send(removeFruit)
})

app.listen(port, () => console.log('Listening to port:', port))