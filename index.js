const express = require('express');
const app = express();
const parser = require('body-parser');
const PORT = process.env.PORT || 3001;

app.use(parser.json());
// use body-parser to extract the entire body portion of an incoming request stream and expose it in req.body
app.use(express.static('.client/dist'));
//to serve static files such as images, CSS files, and JavaScript files

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Connection Success! Listening on port ${PORT}!`);
});
