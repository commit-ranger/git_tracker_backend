const client = require("../../db/client");
const create_folder = require("../Folder/add_folder");
const { create_new_cred_admin } = require("../cred/add_cred");
const create_new_file = require("../file/add_file");
const { create_initial_group } = require("../groups/add_groups");
const add_log = require("../log/add_log");
const { find_user_by_id } = require("../users/find_user");
const { add_repo_to_user } = require("../users/mod_user");

// IMPORTANT NOTE
// WHEN CREATING A USER WE NEED TO LOCATE THE CREATOR ID AND MAKE SURE IT IS A USER THEN ADD THIS REPO_ID TO THE CREATORS_ID
// IMPORTANT NOTE

async function create_repo(title, creator_id) {
  const allowed_users = [creator_id];
  const find_creator = await find_user_by_id(creator_id);
  const username_of_creator = find_creator.username;

  try {
    const new_repo = await client.query(
      `
        INSERT INTO repo (title, creator_id, allowed_user)
        VALUES ($1, $2, $3)
        RETURNING *;`,
      [title, creator_id, allowed_users]
    );
    try {
      await add_log(
        new_repo.rows[0].repo_id,
        `${username_of_creator}, created Repo`
      );
      await add_repo_to_user(new_repo.rows[0].repo_id, creator_id);
      await create_new_cred_admin(new_repo.rows[0].repo_id, creator_id);
    } catch (error) {
      console.log("error adding repo to user");
    }
    //! CREATE MAIN FOLDER
    try {
      const new_main_folder = await client.query(
        `
    INSERT INTO folder (repo_id, title, is_main_folder)
    VALUES ($1, $2, $3)
    RETURNING *;`,
        [new_repo.rows[0].repo_id, "main", true]
      );

      //!CREATE FOLDER AND FILE
      try {
        await create_folder(
          new_repo.rows[0].repo_id,
          new_main_folder.rows[0].folder_id,
          allowed_users[0]
        );
        await create_new_file(
          new_repo.rows[0].repo_id,
          new_main_folder.rows[0].folder_id,
          allowed_users[0]
        );
      } catch (error) {
        console.log(
          "error creating new repo folder & file function/repo/add_repo.js",
          error
        );
      }
    } catch (error) {
      console.log(
        "Error creating main folder function/repo/add_repo.js",
        error
      );
    }
    //! CREATE ADMIN GROUP
    await create_initial_group(new_repo.rows[0].repo_id, creator_id);
  } catch (error) {
    console.log("ERROR CREATING NEW REPO function/repo/add_repo.js", error);
  }
}

module.exports = create_repo;

//!: repo only needs a title and a user connected to create
// all other sections will be left to default
// YOU CAN MODIFY EVERYTHING ELSE LATER
