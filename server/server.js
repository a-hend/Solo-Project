const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

const api = require('./routes/api.js');

app.use('/api', 
  api
  // (req, res) => {
  //   res.status(200).send('Hello api endpoint, from the back-end of your mom\'s house');
);




// catch-all route handler for any requests to an unknown route
app.use((req,res) => res.sendStatus(404));


app.use((err,req,res, next) => { // Express knows this is the global error handler becuase it accepts 4 arguments
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };
  //3. create a variable errorObj and assign it our default
  const errorObj = Object.assign(defaultErr, err);
  console.log('Error!!! ', errorObj.message);
  return res.status(errorObj.status).json(errorObj.join);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
});

module.exports = app;