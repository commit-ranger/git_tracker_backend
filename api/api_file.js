const express = require("express");
const file_router = express.Router();
const jwt = require("jsonwebtoken");
const find_file_by_repo_id = require("../functions/file/find_file");
const change_selected_section = require("../functions/file/mod_file");



file_router.post("/get_file_attached_to_repo", async (req, res)=>{
    const repo_id = req.body.id
    files = await find_file_by_repo_id(repo_id)
    res.send(files)
})

file_router.post("/update_selected_checkbox", async (req, res) => {
    try {
        const all_files = req.body.only_changed_files;
        console.log(all_files)

        await Promise.all(all_files.map(async (single_file) => {

            await change_selected_section(single_file.section_checked, single_file.file_id);
        }));

        res.send("Update Request Sent");
    } catch (error) {
        console.error("Error updating files:", error);
        res.status(500).send("Internal Server Error");
    }
});



module.exports = file_router