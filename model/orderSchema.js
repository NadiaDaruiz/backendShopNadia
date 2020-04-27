const mongoose = require('mongoose');
const { Schema } = mongoose;


const OrderSchema = new Schema({
    createAt: { type: Date, default: Date.now },
    product: { type: String, required: true },
    qty: { type: Number, required: true },
})

module.exports = mongoose.model('Order', OrderSchema);