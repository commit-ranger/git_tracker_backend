const express = require("express");
const repo_router = express.Router();
const jwt = require("jsonwebtoken");
const { get_all_repos, find_repo_by_title, find_repo_by_id } = require("../functions/repo/find_repo");
const {find_folder_by_repo_id_not_main, find_folder_by_repo_id_is_main} = require("../functions/Folder/find_folder");
const find_file_by_repo_id = require("../functions/file/find_file");
const find_groups_by_repo_id = require("../functions/groups/find_group");
const { require_user } = require("./api_utils");

// for creating a new repo 
// create repo --> create folder(main) --> create files

repo_router.post("/get_entire_repo", require_user, async (req, res)=>{

       //TODO: check to see if user is allowed to see this REPO
       const user_in_question = req.user.user_id
       
        // pull folders and repo maybe organized into objects 
       const repo_id = req.body.id

       const repo = await find_repo_by_id(repo_id)
       const folders = await find_folder_by_repo_id_not_main(repo_id)
       const main_folder = await find_folder_by_repo_id_is_main(repo_id)
       const files = await find_file_by_repo_id(repo_id) 
       const groups = await find_groups_by_repo_id(repo_id)


       res.send([repo, folders, files, groups, main_folder ]) 
})


//? CREATE NEW REPO


//? GET REPO BY TITLE
repo_router.get("/get_repo_by_title", async (req, res) =>{
        const repo_in_question = await find_repo_by_title(req.title)

        res.send(repo_in_question)
})


//? GET REPO BY ID
// important 
//...???

repo_router.get("/get_repo_by_id", async (req, res) =>{
        const repo_in_question = await find_repo_by_id(req.body.id)
        res.send(repo_in_question)
})


//? GET ALL REPOS
repo_router.get("/get_all_repos",async (req, res)=> {

        const all_of_the_repos = await get_all_repos()

        res.send(all_of_the_repos)
})

module.exports = repo_router