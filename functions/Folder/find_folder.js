const client = require("../../db/client");

async function find_folder_by_repo_id(repo_id) {
    try {

      const { rows } = await client.query(
        `
              SELECT * FROM folder
              WHERE "repo_id" = $1;
          `,
        [repo_id]
      );
      return rows;
    } catch (error) {
      console.log("find folder by repo_id ERROR  function/folder/find_folder.js", error);
    }
  }

  module.exports = find_folder_by_repo_id