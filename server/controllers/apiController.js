// const express = require('express'); 
// const fetch = require('node-fetch');

const apiController = {};


apiController.getPic = (req, res, next) => {
  
  fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => res.json())
    .then(data => {
      console.log('Data from API: ', data);
      res.locals.data = {
        url: data.url,
        title: data.title
      }
      return next();
    })
    .catch(err => {
      console.log('Error retrieving data from api');
      return next({
        log: "Error with api request",
        message: err,
      })
    })
    
};


module.exports = apiController;