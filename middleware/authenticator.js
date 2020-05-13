const User = require('../model/userSchema');
const createError = require('http-errors')


const auth = async (req, res, next) => {

    // function to verify the auth of the tokens according to each user/login

    const token = req.header('x-auth')
    console.log(token);
    try {

        const user = await User.findByToken(token)
        console.log(user);
        if (!user) throw createError(403)

        req.user = user;
        req.token = token;
        next()
    }
    catch (err) {
        next(err)

    }
}

module.exports = auth;