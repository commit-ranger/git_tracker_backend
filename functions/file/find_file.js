const client = require("../../db/client");

async function find_file_by_repo_id(repo_id) {
    try {

      const { rows } = await client.query(
        `
              SELECT * FROM file
              WHERE "repo_id" = $1;
          `,
        [repo_id]
      );
      console.log("files sent", rows[0])
      return rows;
    } catch (error) {
      console.log("find file by repo_id ERROR  function/file/find_file.js", error);
    }
  }

  module.exports = find_file_by_repo_id