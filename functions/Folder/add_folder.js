const client = require("../../db/client");

async function create_folder(repo_id, parent_folder_id){

    try {
        const { rows } = await client.query(
          `
          INSERT INTO folder (repo_id, parent_folder_id)
          VALUES ($1, $2)
          RETURNING *;`,
          [repo_id, parent_folder_id]
        );
        console.log("folder created");
        return rows;
      } catch (error) {
        console.log("ERROR CREATING NEW FOLDER", error)
      }
}

module.exports = create_folder