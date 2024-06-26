const client = require("../client");

async function build_user_table() {
  try {
    await client.query(`
        DROP TABLE IF EXISTS users;
        `);
  } catch (error) {
    console.log("error dropping user table db/seed/user_seed.js", error);
  }
  try {
    await client.query(`
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            repo_list TEXT[] DEFAULT ARRAY[]::TEXT[],
            username VARCHAR(255),
            password VARCHAR(255),
            first_name VARCHAR(250),
            last_name VARCHAR(250),
            email VARCHAR(255),
            phone VARCHAR(255) DEFAULT '(111)111-1111',
            is_super_admin BOOLEAN DEFAULT false,
            user_status VARCHAR(255) DEFAULT 'active',
            groups TEXT[] DEFAULT ARRAY[]::TEXT[]
        )
        `);
    //  TEXT[] = an array of text
    // DEFAULT ARRAY[]::TEXT[] = default is an empty array of text
  } catch (error) {
    console.log("error creating user table db/seed/user_seed.js", error);
  }
}

module.exports = build_user_table;


//? SUPER ADMIN
// this functionality is for SITE admin not REPO admin 

//? user_status VARCHAR(255) DEFAULT "active"
//! for growth not important now

//? account_expiration_date
// maybe add this so we could create payed plans. 
// maybe an add free mode they could pay for