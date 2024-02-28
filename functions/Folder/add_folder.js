const client = require("../../db/client");

async function create_folder(){

    try {
        const { rows } = await client.query(
          `
            INSERT INTO folder (repo_id)
            VALUES ($1)
            RETURNING *;`,
          [repo_id]
        );
        console.log("repo created");
        return rows;
      } catch (error) {
        console.log("ERROR CREATING NEW REPO", error)
      }
}