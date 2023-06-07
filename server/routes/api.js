const express = require('express');
const app = require('../server');
// import controllers

const router = express.Router();

// get request from server.js at /api endpoint
router.get('/', 
  // midware (controller) here
  (req, res, next) => {
    res.status(200).send('some data');
});


module.exports = router;