const client = require("../../db/client");

async function create_user({
  username,
  password,
  first_name,
  last_name,
  email,
  phone
}) {
  try {
    const { rows } = await client.query(
      `
      INSERT INTO users(username, password, first_name, last_name, email, phone)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *;`,
      [username, password, first_name, last_name, email, phone]
    );
    console.log("user created");
    return rows;
  } catch (error) {
    console.log(
      `error creating new user username:,${username} first name:${first_name} last name:${last_name}`,
      error
    );
  }
}

module.exports = create_user

//! ABOUT IS_SUPER_ADMIN
// Manually make super admins in Postico or make a special function
// Lets not invite a super admin bug
