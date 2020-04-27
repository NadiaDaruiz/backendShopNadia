const Order = require('../model/orderSchema')
const createError = require('http-errors');


// GET to see all the products on the shop
exports.getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find()
        res.json({ success: true, orders: orders })
    }
    catch (err) {
        next(err)
    }
};

// GET just one order of the shop/orders
exports.getOrder = async (req, res, next) => {
    const { id } = req.params;
    try {
        const order = await Order.findById(id);
        if (!order) throw createError(404)
        res.json({ success: true, order: order });
    }
    catch (err) {
        next(err)
    }
};

// POST to update the shop with a new order
exports.postOrder = async (req, res, next) => {
    console.log(req.body);

    try {
        const order = new Order(req.body);
        await order.save()
        res.json({ success: true, order: order })
    }
    catch (err) {
        next(err)
    }
};

// PUT to update the specific order
exports.putOrder = async (req, res, next) => {
    const { id } = req.params;
    const order = req.body;
    console.log(order)
    try {
        const updateOrder = await Order.findByIdAndUpdate(id, order, { new: true })
        if (!order) throw createError(404)
        res.json({ success: true, order: updateOrder })
    }
    catch (err) {
        next(err)
    }
};

//DELETE one of the orders of the shop
exports.deleteOrder = async (req, res, next) => {
    const { id } = req.params;
    try {
        const order = await Order.findByIdAndDelete(id)
        if (!order) throw createError(404)
        res.json({ success: true, order: order })
    }
    catch (err) {
        next(err)
    }
};