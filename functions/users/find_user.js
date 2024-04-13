const client = require("../../db/client");

//? this function need to go through the database by the username then gives us al reletive data conected to the user.

async function find_user_by_username(userNameValue) {
  try {
    const { rows } = await client.query(
      `
            SELECT * FROM users
            WHERE "username" = $1;
        `,
      [userNameValue] 
    );
    return rows[0];
  } catch (error) {
    console.log("userFinderByUsername ERROR", error);
  }
}
async function find_user_by_id(idValue) {
  try {
    const { rows } = await client.query(
      `
            SELECT * FROM users
            WHERE "user_id" = $1;
        `,
      [idValue]
    );

    return rows[0];
  } catch (error) {
    console.log("userFinderById ERROR", error);
  }
}

async function get_all_users() {
  try {
    const { rows } = await client.query(`
      SELECT * FROM users
      ;
      `);
    return rows;
  } catch (error) {
    console.log("error with getAllUsers", error);
  }
}

module.exports = { find_user_by_id, find_user_by_username, get_all_users };
