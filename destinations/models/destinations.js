const mongoose = require('mongoose');

const destinationsSchema = new mongoose.Schema({
  name: {type: String, required: true},
  fly: {type: Boolean},
  climate: {type: String},
  image: {type: String}
});

module.exports = mongoose.model('Destinations', destinationsSchema);
