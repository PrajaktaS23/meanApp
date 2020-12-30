const express = require('express');
const app = express();
const productRoutes = express.Router();

// Require Product model in our routes module
let Product = require('../models/Product');

// Defined store route
productRoutes.route('/add').post(function (req, res) {
  let product = new Product(req.body);
  product.save()
    .then(product => {
      res.status(200).json({'Product': 'Product has been added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
productRoutes.route('/').get(function (req, res) {
  Product.find(function (err, products){
    if(err){
      console.log(err);
    }
    else {
      res.json(products);
    }
  });
});



//  Defined update route
productRoutes.route('/update/:id').post(function (req, res) {
  Product.findById(req.params.id, function(err, product) {
      if (!product) {
          //console.log("Record not found");
          res.status(404).send("Record not found");
      }else {
     
      product.Status = req.body.Status;
      product.save().then(product => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});



module.exports = productRoutes;