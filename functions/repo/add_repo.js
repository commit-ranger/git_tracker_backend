const client = require("../../db/client");
const create_folder = require("../Folder/add_folder");
const create_new_file = require("../file/add_file");
const create_initial_group = require("../groups/add_groups");

// IMPORTANT NOTE
// WHEN CREATING A USER WE NEED TO LOCATE THE CREATOR ID AND MAKE SURE IT IS A USER THEN ADD THIS REPO_ID TO THE CREATORS_ID
// IMPORTANT NOTE

async function create_repo(title, creator_id) {
  try {
    const new_repo = await client.query(
      `
        INSERT INTO repo (title, creator_id)
        VALUES ($1, $2)
        RETURNING *;`,
      [title, creator_id]
    );
    console.log("repo created");
    //! CREATE MAIN FOLDER
    try {
      const new_main_folder = await client.query(
        `
    INSERT INTO folder (repo_id, title, is_main_folder)
    VALUES ($1, $2, $3)
    RETURNING *;`,
        [new_repo.rows[0].repo_id, "main", true]
      );
      console.log("main folder created");

        //!CREATE FOLDER AND FILE 
        try {
           await create_folder(new_repo.rows[0].repo_id, new_main_folder.rows[0].folder_id)
           await create_new_file(new_repo.rows[0].repo_id, new_main_folder.rows[0].folder_id)
        } catch (error) {
          console.log("error creating new repo folder & file function/repo/add_repo.js", error )
        }

    } catch (error) {
      console.log("Error creating main folder function/repo/add_repo.js", error );
    }
    //! CREATE ADMIN GROUP
    await create_initial_group(new_repo.rows[0].repo_id, creator_id)


  } catch (error) {
    console.log("ERROR CREATING NEW REPO function/repo/add_repo.js", error);
  }
}


module.exports = create_repo;

//!: repo only needs a title and a user connected to create
// all other sections will be left to default
// YOU CAN MODIFY EVERYTHING ELSE LATER
