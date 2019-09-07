const router = require('express').Router()
const {search} = require('./controller.js');

router
  .route('/search')
  .get(search)
  
// router
//   .route('/review')
//   .get(reviews)

// router
//   .route('/product')
//   .get(product)

module.exports = router;