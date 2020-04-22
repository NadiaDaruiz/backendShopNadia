const db = require('../model/db');
const createError = require('http-errors');


// GET to see all the products on the shop
exports.getUsers = (req, res, next) => {
    const users = db.get('users').value();
    res.json({ success: true, users: users })
};

// GET just one user of the shop
exports.getUser = (req, res, next) => {
    const { name } = req.params;
    const user = db.get('users').find({ name }).value();

    res.json({ success: true, user: user });
};

// POST to update the shop with a new user
exports.postUser = (req, res, next) => {
    console.log(req.body);

    db.get('users').push(req.body).last().write();

    res.json({ success: true, user: req.body })
    // res.json({ success: true, user: users })

};

// PUT to update the specific user
exports.putUser = (req, res, next) => {
    const { name } = req.params;

    const update = req.body;
    console.log(update)

    db.get('users').find({ name }).assign(update).write();

    res.json({ success: true, user: update })
};

//DELETE one of the users of the shop
exports.deleteUser = (req, res, next) => {
    const { name } = req.params;

    const user = db.get('users').remove({ name }).write();

    res.json({ success: true, user: user })
};