

const client = require("../client");

async function build_group_table() {
  try {
    await client.query(`
        DROP TABLE IF EXISTS groups;
        `);
  } catch (error) {
    console.log("error dropping groups table db/seed/repo_seed.js", error);
  }
  try {
    await client.query(`
    CREATE TABLE groups (
      group_id SERIAL PRIMARY KEY,
      repo_id TEXT,
      group_name VARCHAR(255) DEFAULT 'Group name',
      group_members TEXT[] DEFAULT ARRAY[]::TEXT[],
      is_admin BOOLEAN DEFAULT false,
      color TEXT DEFAULT 'blue',
      description TEXT DEFAULT 'enter description here'
    );
    
  
        `);
  } catch (error) {
    console.log("Error creating groups table: ", error);
  }
}

module.exports = build_group_table;


// GROUPS ARE CONNECTED TO REPOS, AND HAVE LEVES OF AUTH

// TODO SECTIONS 
// GROUP ID 
// REPO ID
// GROUP NAME 
// GROUP MEMBERS
// IS ADMIN 
//* ADDITIONAL OPTIONS
// GROUP COLOR 
// GROUP DESCRIPTION 
