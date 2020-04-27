const mongoose = require('mongoose');
const { Schema } = mongoose;


const ProductSchema = new Schema({
    name: { type: String, required: true },
    origin: { type: String, required: true },
    soldBy: { type: String, require: true },
    price: { type: Number, require: true },
    qty: { type: Number, require: true }
});

module.exports = mongoose.model('Product', ProductSchema)