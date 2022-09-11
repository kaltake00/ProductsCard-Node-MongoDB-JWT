const mongoose = require("mongoose");
const ProductsList = mongoose.model(
  "ProductsList",
  new mongoose.Schema({
    listName: String,
    userID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created: { type: Date, default: Date.now },
    products: [{
      name: String,
      quantity: String
    }]
  })
);
module.exports = ProductsList;