const db = require('../model/db');
const createError = require('http-errors');


// GET to see all the products on the shop
exports.getOrders = (req, res, next) => {
    const orders = db.get('orders').value();
    res.json({ success: true, orders: orders })
};

// GET just one order of the shop
exports.getOrder = (req, res, next) => {
    const { name } = req.params;
    const order = db.get('orders').find({ name }).value();

    res.json({ success: true, order: order });
};

// POST to update the shop with a new order
exports.postOrder = (req, res, next) => {
    console.log(req.body);

    db.get('orders').push(req.body).last().write();

    res.json({ success: true, order: req.body })
    // res.json({ success: true, order: orders })

};

// PUT to update the specific order
exports.putOrder = (req, res, next) => {
    const { name } = req.params;

    const update = req.body;
    console.log(update)

    db.get('orders').find({ name }).assign(update).write();

    res.json({ success: true, order: update })
};

//DELETE one of the orders of the shop
exports.deleteOrder = (req, res, next) => {
    const { name } = req.params;

    const order = db.get('orders').remove({ name }).write();

    res.json({ success: true, order: order })
};