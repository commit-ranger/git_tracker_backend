const express = require("express");
const folder_router = express.Router();
const jwt = require("jsonwebtoken");
const find_folder_by_repo_id = require("../functions/Folder/find_folder");

folder_router.post("/get_folders_attached_to_repo", async (req, res)=>{
    const repo_id = req.body.id
    const folders = await find_folder_by_repo_id(repo_id)
    res.send(folders)
})



module.exports = folder_router