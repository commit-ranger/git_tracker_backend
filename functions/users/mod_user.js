const client = require("../../db/client");

async function add_groups_to_user(user_id, group_id){

    try {
        const { rows } = await client.query(
            `
            UPDATE users
            SET groups = ARRAY_APPEND(groups, $1)
            WHERE user_id = $2
            `,
            [group_id, user_id]
          );
          console.log("user modded");
          return rows;


    } catch (error) {
        console.log("Error adding group to user function/user/mod_user.js", error)
    }
}

module.exports = {add_groups_to_user}