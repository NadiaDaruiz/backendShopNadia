const createError = require('http-errors');
const Product = require('../model/productSchema')

// GET to see all the products on the shop
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find()
        res.json({ success: true, products: products })
    }
    catch (err) {
        next(err)
    }
};

// GET just one product of the shop
exports.getProduct = async (req, res, next) => {
    console.log(req.params.name)
    try {
        const product = await Product.find({ name: req.params.name })
        if (!product) throw createError(404)
        res.json({ success: true, product: product });
    }
    catch (err) {
        next(err)
    }
};

// POST to update the shop with a new product
exports.postProduct = async (req, res, next) => {

    try {
        const product = new Product(req.body)
        await product.save()
        res.json({ success: true, product: product })
    }
    catch (err) {
        next(err)
    }
};

// PUT to update the specific product
exports.putProduct = async (req, res, next) => {
    const { id } = req.params;
    const product = req.body;
    console.log(product)
    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        if (!product) throw createError(404)
        res.json({ success: true, product: updateProduct })
    }
    catch (err) {
        next(err)
    }
};

//DELETE one of the products of the shop
exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    try {
        const product = await Product.findByIdAndDelete(id)
        res.json({ success: true, product: product })
    }
    catch (err) {
        next(err)
    }
};