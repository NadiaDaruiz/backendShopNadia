const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new Schema({

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: Number, required: false },
    address: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, {
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


module.exports = mongoose.model('User', UserSchema);