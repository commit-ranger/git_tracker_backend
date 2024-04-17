const client = require("../../db/client");

async function find_groups_by_repo_id(repo_id) {
    try {

      const { rows } = await client.query(
        `
              SELECT * FROM groups
              WHERE "repo_id" = $1;
          `,
        [repo_id]
      );
      return rows;
    } catch (error) {
      console.log("find groups by repo_id ERROR  function/groups/find_groups.js", error);
    }
  }

  module.exports = find_groups_by_repo_id