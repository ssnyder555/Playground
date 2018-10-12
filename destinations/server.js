const express = require('express');
const app     = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

require('./db/db')

app.get('/', (req, res) => {
  console.log('its alive');
  res.send('its alive');
})



app.listen(3000, () => {
  console.log('listening on port 3000')
})
