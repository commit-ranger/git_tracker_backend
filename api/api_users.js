const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// ! FILE IMPORTS
const password_hasher = require("../functions/password_hasher");
const { find_user_by_id, find_user_by_username, get_all_users } = require("../functions/users/find_user");
const create_user = require("../functions/users/add_user");

// TODO: REGISTER USER 

usersRouter.post("/register", async (req, res) => {
    const { firstName, lastName, username, password, email } = req.body;
    try {
      //? this below checks if the username already exists
      const _user = await find_user_by_username(username);
      if (!_user) {
          const  hashed_password = password_hasher(password)
        const user = await create_user({
          firstName,
          lastName,
          username,
          password: hashed_password,
          email,
          phone
        });
        const token = jwt.sign(
          {
            username,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({
          userInfo: user[0],
          message: "Thank you for joining!",
          token,
        });
      } else {
        res.send("username already un use. please try again ");
      }
    } catch (error) {
      console.log("error registering new user", error);
    }
  });

  //TODO: LOGIN USER 


  //TODO: PULL ALL USERS
usersRouter.get("/get_all_users", async (req, res)=> {
  // res.send(get_all_users())
  const all_users = await get_all_users()
    res.send(all_users)
    



})


module.exports = usersRouter