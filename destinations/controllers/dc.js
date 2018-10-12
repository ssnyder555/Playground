
const express = require('express');

const router = express.Router();

const Destinations = require('../models/destinations')

router.get('/', (req,res) => {
  Destinations.find({}, (err, allDestinations) => {
    if(err) {
      console.log(err)
    } else {
      res.render('index.ejs', {
        destination:  Destinations
      })
    }
  })
})

router.post('/', (req,res) => {
  Destinations.create({
    name: 'Tulum',
    fly: true,
    climate: 'hot',
    image: 'https://exp.cdn-hotels.com/hotels/5000000/4520000/4515800/4515733/4c6016ed_z.jpg'
  }, (err, createDestination) => {
    if(err) {
      console.log(err);
    } else {
      console.log(createDestination);
    }
  })
})

module.exports = router;
