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
router.use('/users', require("./api_users.js"))
router.use("/repo", require("./api_repo.js"))
router.use("/folder", require("./api_folder.js"))
router.use("/file", require("./api_file.js"))



//TODO: 404 error handling 
router.get("*", (_, res) => {
  res.status(404).send({
    name: "404 - not found",
    message: "The route you are looking for does not exist",
  });
});

router.use((error, req, res, next) => {
  console.log("server error: ", error);

  res.send({
    name: error.name,
    message: error.message,
  });
});
module.exports = router