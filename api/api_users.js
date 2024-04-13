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
    const { firstName, lastName, username, password, email, phone } = req.body;
    console.log(req.body)
    try {
      //? this below checks if the username already exists
      const _user = await find_user_by_username(username);
      if (!_user) {
        const user = await create_user({
          firstName,
          lastName,
          username,
          password,
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
          success: true,
        });
      } else {
        res.send("username already un use. please try again ");
      }
    } catch (error) {
      console.log("error registering new user api_user", error);
    }
  });

  //TODO: LOGIN USER 

  usersRouter.post("/login", async (req, res) => {
    const username_in_question = req.body.username
    const password_in_question = req.body.password

    try {
       const checked_user = await find_user_by_username(username_in_question)
      console.log(checked_user)
      if (checked_user.username == username_in_question &&
        bcrypt.compare(checked_user.password, password_in_question)
        ) {
          const token = jwt.sign(
          {
            id: checked_user.user_id,
            username: checked_user.username,
          },
  
          process.env.JWT_SECRET,
          { expiresIn: "1w" }
        );
        res.send({
          message: "you have logged in!!!",
          token,
          success: true,
          id: checked_user.user_id,
          is_super_admin: checked_user.is_super_admin,
          username: checked_user.username,
        });
        
      } else {
        console.log("login failed")
        res.send({
          message: "you have NOT logged in!!!",
          token: null,
          success: false,
        })
      }

    } catch (error) {
      console.log(error)
    }
  })


  //TODO: PULL ALL USERS
usersRouter.get("/get_all_users", async (req, res)=> {
  // res.send(get_all_users())
  const all_users = await get_all_users()
    res.send(all_users)
    



})


module.exports = usersRouter