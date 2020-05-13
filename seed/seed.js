const mongoose = require('mongoose');
const faker = require('faker');
const User = require('../model/userSchema');

const main = async () => {

    mongoose.connect('mongodb://127.0.0.1:27017/fruit-shop', { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('error', (err) => console.log(err))
    mongoose.connection.on('open', () => console.log('database connected'))

}

main()