const db = require('../model/db');
const createError = require('http-errors');


// GET to see all the products on the shop
exports.getProducts = (req, res, next) => {
    const products = db.get('products').value();
    res.json({ success: true, products: products })
};

// GET just one product of the shop
exports.getProduct = (req, res, next) => {
    const { name } = req.params;
    const product = db.get('products').find({ name }).value();

    res.json({ success: true, product: product });
};

// POST to update the shop with a new product
exports.postProduct = (req, res, next) => {
    console.log(req.body);

    db.get('products').push(req.body).last().write();

    res.json({ success: true, product: req.body })
    // res.json({ success: true, product: products })

};

// PUT to update the specific product
exports.putProduct = (req, res, next) => {
    const { name } = req.params;
    const update = req.body;
    console.log(update)

    db.get('products').find({ name }).assign(update).write();

    res.json({ success: true, product: update })
};

//DELETE one of the products of the shop
exports.deleteProduct = (req, res, next) => {
    const { name } = req.params;

    const product = db.get('products').remove({ name }).write();

    res.json({ success: true, product: product })
};