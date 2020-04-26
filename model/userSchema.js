const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: false },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }

})

module.exports = mongoose.model('User', UserSchema);