const client = require("../../db/client");
const { add_groups_to_user } = require("../users/mod_user");

async function create_initial_group (repo_id, creator_id){

//? this is its own function because it is the only automatic admin group 

try {
    const { rows } = await client.query(
        `
          INSERT INTO groups (repo_id, group_name)
          VALUES ($1, $2)
          RETURNING *;`,
        [repo_id, "Admin"]
      );
      await add_groups_to_user(creator_id, rows[0].group_id)
      console.log("Admin group created");
      return rows;
} catch (error) {
    console.log("error creating admin group function/groups/add_groups.js", error)
}


}

module.exports = create_initial_group