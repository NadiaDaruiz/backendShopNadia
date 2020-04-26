// const db = require('../model/db');
const createError = require('http-errors');
const User = require('../model/userSchema');


// GET to see all the users on the shop
exports.getUsers = async (req, res, next) => {

    try {
        const users = await User.find()
        res.json({ success: true, users: users })
    }
    catch (err) {
        next(err)
    }
};

// GET just one user of the shop
exports.getUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id)
        if (!user) throw createError(404)
        res.json({ success: true, user: user });
    }
    catch (err) {
        next(err)
    }
};

// POST to update the shop with a new user
exports.postUser = async (req, res, next) => {
    console.log(req.body);

    try {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            address: req.body.address,
            city: req.body.city,
            country: req.body.country,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
};

// PUT to update the specific user info
exports.putUser = async (req, res, next) => {
    // const { firstName } = req.params; I wanna use firstName to do the search 
    const { id } = req.params;

    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        country: req.body.country,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    }

    try {
        await User.findByIdAndUpdate(id, user)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
};

//DELETE one of the users of the shop
exports.deleteUser = async (req, res, next) => {
    const { id } = req.params;

    try {
        const user = await User.findByIdAndDelete(id)
        res.json({ success: true, user: user });
        console.log(user)
    }
    catch (err) {
        next(err)
    }
};