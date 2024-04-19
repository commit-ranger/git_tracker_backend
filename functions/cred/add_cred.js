const client = require("../../db/client");
const add_log = require("../log/add_log");
const { find_user_by_id } = require("../users/find_user");
async function create_new_cred_admin(repo_id, user_id){

    const username_search = await find_user_by_id(user_id)
    const username = username_search.username
    try {
          const { rows } = await client.query(
              `
                INSERT INTO cred (repo_id, user_id, view_only, is_admin, accepted, log_access)
                VALUES ($1, $2, $3, $4, $5, $6)
                RETURNING *;`,
              [repo_id, user_id, false, true, true, true]
            );
            add_log(repo_id, `Credentials created for ${username}`)
            return rows;
      } catch (error) {
          console.log("error creating admin creds function/cred/add_cred.js", error )
      }
  }

  module.exports = {create_new_cred_admin}