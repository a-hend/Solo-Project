const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello world, from your mom\'s house!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

module.exports = app;