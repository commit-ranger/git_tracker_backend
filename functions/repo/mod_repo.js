const client = require("../../db/client");

async function add_groups_to_repo(repo_id, group_id){

    try {
        const { rows } = await client.query(
            `
            UPDATE repo
            SET connected_groups = ARRAY_APPEND(connected_groups, $1)
            WHERE repo_id = $2
            `,
            [group_id, repo_id]
          );
          console.log("group added to repo");
          return rows;


    } catch (error) {
        console.log("Error adding group to repo function/repo/mod_repo.js", error)
    }
}

module.exports = {add_groups_to_repo}