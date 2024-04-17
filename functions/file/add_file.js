const client = require("../../db/client");
const add_log = require("../log/add_log");
const { find_user_by_id } = require("../users/find_user");

async function create_new_file(repo_id, folder_id, creator_id){
  const find_creator = await find_user_by_id(creator_id)
  const username_of_creator = find_creator.username

  try {
        const { rows } = await client.query(
            `
              INSERT INTO file (repo_id, folder_id)
              VALUES ($1, $2)
              RETURNING *;`,
            [repo_id, folder_id]
          );
          add_log(repo_id, `${username_of_creator} created a file`)
          return rows;
    } catch (error) {
        console.log("error batching file seed/filler_data/file_seed_data.js")
    }
}

module.exports = create_new_file