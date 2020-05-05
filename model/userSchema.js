const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const jwt = require('jsonwebtoken');
const { compare, encrypt } = require('../lib/encryption');
const env = require('../config/config');



const UserSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: false },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    role: {
        type: String,
        enum: ['Admin', 'User'],
        required: true
    },
    tokens: [{ token: { type: String, require: true } }],
    password: { type: String, required: true },
},
    {
        toObject: {
            virtuals: true
        }

        // toJSON: {
        //     virtuals: true
        // }
    });

UserSchema.plugin(uniqueValidator);


UserSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
});

// creating the tokens and storing them in the array above 
UserSchema.methods.generateAuthToken = function () {
    const user = this;
    const token = jwt.sign({ _id: user._id }, env.jwt_key).toString()

    user.tokens.push({ token });
    return token
};

// after authentification we choose which data we wanna show to the user
UserSchema.methods.publicFields = function () {
    let publicData = {
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.userName,
        email: this.email,
        id: this._id
    }
    return publicData
};

// in case the user change the password
UserSchema.pre('save', async function (next) {

    this.password = await encrypt(this.password);

    next()
});


UserSchema.methods.checkPassword = async function (password) {

    const user = this;
    return await compare(password, user.password)
};

UserSchema.statics.findByToken = function (token) {
    const User = this;
    let decoded;
    try {
        decoded = jwt.verify(token, env.jwt_key)
    }
    catch (e) {
        return
    }
    return User.findOne({
        _id: decoded._id,
        'tokens.token': token
    }).select('-password -__v')
};


module.exports = mongoose.model('User', UserSchema);