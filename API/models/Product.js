const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Product = new Schema({
  ProductName: {
    type: String
  },
  Categories: {
    
    type: String
  },
  Tags: {
    type: String
  },
  Price: {
      type: Number
  },
  Quantity: {
      type: Number
    },
    Status: {
        type: Boolean
    }
},{
    collection: 'Product'
});

module.exports = mongoose.model('Product', Product);