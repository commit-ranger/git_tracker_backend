const express = require("express");
const file_router = express.Router();
const jwt = require("jsonwebtoken");


file_router.post("/get_file_attached_to_repo", async (req, res)=>{
    const repo_id = req.body.id
    
})



module.exports = file_router