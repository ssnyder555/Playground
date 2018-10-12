const express = require('express')
const app = express();
const Music = require('./models/music');

// app.get('/', (req, res) =>{
//   res.send("hello");
// })



app.listen(3000, () =>{
  console.log("working");
});
