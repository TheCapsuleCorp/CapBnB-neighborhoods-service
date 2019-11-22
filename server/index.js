const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const path = require('path');
const mongodo = require('../database');
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;


app.use(bodyparser.json());
//looks at requests where the Content-Type: application/json header is present
//and transforms the text-based JSON input into JS-accessible variables under req.body.
app.use(express.static('.client/dist'));
// app.use(express.static(`${__dirname}/../client/dist`));
//to serve static files such as images, CSS files, and JavaScript files
app.use(bodyparser.urlencoded({ extended: true }));
//app.use(bp.urlencoded({extended: true}) works similarly to body parse the extended: true
//ensures that the req.body object will contain values of any type instead of just strings.


app.get('/neighborhoods', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Connection Success! Listening on port ${PORT}!`);
});
