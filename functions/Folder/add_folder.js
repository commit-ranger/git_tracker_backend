const client = require("../../db/client");
const add_log = require("../log/add_log");
const { find_user_by_id } = require("../users/find_user");

async function create_folder(repo_id, parent_folder_id, creator_id){
  const find_creator = await find_user_by_id(creator_id)
  const username_of_creator = find_creator.username

    try {
        const { rows } = await client.query(
          `
          INSERT INTO folder (repo_id, parent_folder_id)
          VALUES ($1, $2)
          RETURNING *;`,
          [repo_id, parent_folder_id]
        );
        add_log(repo_id,`${username_of_creator} created a file`);
        return rows;
      } catch (error) {
        console.log("ERROR CREATING NEW FOLDER", error)
      }
}

module.exports = create_folder