// const express = require('express'); 
// const fetch = require('node-fetch');

const apiController = {};


apiController.getPic = async (req, res, next) => {
  try {
    const response = await fetch('https://http.dog/200.jpg');
    const data = await response.blob();
    const imageURL = URL.createObjectURL(data);
    console.log('From api: ', imageURL);  
    // res.locals.data = imageURL;
    return next();
  } 
  catch (error) {
    console.log('Error fetching image');
    return next({ log: 'An error occurred retrieving data from NASA'});
  }
};


module.exports = apiController;