const mongoose = require('mongoose');
const { Schema } = mongoose;


const OrderSchema = new Schema({
    createAt: { type: Date, default: Date.now },
    product: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    qty: { type: Number, required: true },
})

module.exports = mongoose.model('Order', OrderSchema);