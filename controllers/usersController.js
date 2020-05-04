const createError = require('http-errors');
const User = require('../model/userSchema');
const jwt = require('jsonwebtoken');

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
        const user = new User(req.body)
        const token = user.generateAuthToken()
        await user.save()

        res.header('x-auth', token)
        res.json({ success: true, user: user })
    }
    catch (err) {
        next(err)
    }
};

// PUT to update the specific user info
exports.putUser = async (req, res, next) => {
    const { id } = req.params;
    const user = req.body;

    try {
        const updateUser = await User.findByIdAndUpdate(id, user, { new: true })
        if (!updateUser) throw createError(404)
        res.json({ success: true, user: updateUser })
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
        if (!user) throw createError(500)
        res.json({ success: true, user: user });
        console.log(user)
    }
    catch (err) {
        next(err)
    }
};

exports.loginUser = async (req, res, next) => {

    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email })
        const valid = await user.checkPassword(password)
        if (!valid) throw createError(401)

        let token = user.generateAuthToken()
        const data = user.publicFields()

        res.header('x-auth', token)
        res.json({ success: true, user: data })
    }
    catch (err) {
        next(err)
    }
};