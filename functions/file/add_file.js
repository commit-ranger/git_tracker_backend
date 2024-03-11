const client = require("../../db/client");

async function create_new_file(repo_id, folder_id){
    try {
        const { rows } = await client.query(
            `
              INSERT INTO file (repo_id, folder_id)
              VALUES ($1, $2)
              RETURNING *;`,
            [repo_id, folder_id]
          );
          console.log("file created");
          return rows;
    } catch (error) {
        console.log("error batching file seed/filler_data/file_seed_data.js")
    }
}

module.exports = create_new_file