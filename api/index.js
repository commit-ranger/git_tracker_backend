const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const { find_user_by_username } = require('../functions/users/find_user.js');


//TODO: Authorize user 
  // this creates a req.user object from the token (if present) to be pulled from the req element
  router.use(async (req, res, next) => {
    const prefix = "Bearer ";
    const auth = req.header("Authorization");
  
  console.log("token",auth, "is this the token bearer?") 
  if (!auth) {
    
    console.log("no auth")
    next();
  } else if (auth.startsWith(prefix)) {
    const token = auth.slice(prefix.length);
    console.log("line20", token)
    try {
      const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
        console.log("line 23",verifyToken)
      if (verifyToken.username) {
        req.user = await find_user_by_username(verifyToken.username);
        
        next();
      }
    } catch (error) {
      console.error("Error authorizing user token",error);
      next(error);
    }
  } else {
    next({
      name: "AuthorizationHeaderError",
      message: `Authorization token must start with ${prefix}`,
    });
  }
});

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