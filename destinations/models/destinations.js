const mongoose = require('mongoose');



const destinationsSchema = new mongoose.destinations ({
  name: {type: String, required: true},
  fly: boolean,
  climate: String,
  image: String
})


module.exports = mongoose.model('Destinations', destinationSchema),
