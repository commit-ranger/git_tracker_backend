const client = require("../../db/client");

async function add_log(repo_id, text){

    try {
        const { rows } = await client.query(
          `
          INSERT INTO log (repo_id, message)
          VALUES ($1, $2)
          RETURNING *;`,
          [repo_id, text]
        );
        return rows;
      } catch (error) {
        console.log("ERROR CREATING NEW LOG", error)
      }
}

module.exports = add_log