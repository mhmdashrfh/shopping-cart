var express = require('express');
var router = express.Router();
const product = require('../models/products')
/* GET home page. */
router.get('/', function(req, res, next) {
  product.find({}, (err, doc) => {
    if(err){
      console.log(err);
    }
      console.log(doc);
      var productGrid = [];
      var productCol =3;
      for (var index = 0; index < doc.length; index+=productCol) {
        productGrid.push(doc.slice(index, index+productCol))
      }
    
    res.render('index', { title: 'Shopping-Cart', product:productGrid});
  }).lean()
});

module.exports = router;
