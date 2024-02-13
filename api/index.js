const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");

//TODO: Authorize user 
// create a req.user object with token and admin status to be pulled from the req element 


//TODO: API health check
router.get('/health', (request, response)=>{
    response.send('I am up and healthy')
  })

//TODO: API connection to components 
// repo folders files users.... Open for a change if there is a better way to organize (EX create, delete, modify, etc)
router.use('users', require('./api_users.js'))



//TODO: 404 error handling 

module.exports = router