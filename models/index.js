const mongoose = require('mongoose')
mongoose.Promise = global.Promise;
const db = {}
db.mongoose = mongoose;
db.user = require('./user.model')
db.products = require('./products.model')
module.exports = db;