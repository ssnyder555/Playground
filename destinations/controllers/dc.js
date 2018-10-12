const express = require('express');

const router = express.Router();

const Destinations = require('./model/destinations')

router.get('/', (req,res) => {
  res.send('Its all working now, time to go home')
})

module.exports = router;
