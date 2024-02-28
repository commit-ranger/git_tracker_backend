const express = require("express");
const repo_router = express.Router();
const jwt = require("jsonwebtoken");
const { get_all_repos, find_repo_by_title, find_repo_by_id } = require("../functions/repo/find_repo");

// for creating a new repo 
// create repo --> create folder(main) --> create files

repo_router.get("/get_entire_repo", async (req, res)=>{
        // pull folders and repo maybe organized into objects 
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