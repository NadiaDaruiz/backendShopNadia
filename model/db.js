const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')

const file = new FileSync('./model/db.json');
const db = low(file)


// Set some defaults
// db.defaults({ products: [] })
//     .write()


module.exports = db