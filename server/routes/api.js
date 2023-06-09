const express = require('express');
// const fetch = require('node-fetch');

// const app = require('../server');

// import controllers
const apiController = require('../controllers/apiController');


const router = express.Router();

// get request from server.js at /api endpoint
router.get('/',
  apiController.getPic,
  (req, res, next) => {
    console.log('From getPic function: ', res.locals.data);
    res.status(200).json(res.locals.data);
});

router.get('/',
  (req, res, next) => {
    res.status(200).send('Welcome to the dark side');
});





module.exports = router;