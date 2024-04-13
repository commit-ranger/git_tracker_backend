const client = require("../client");

//IMPORTANT 
// AN ERROR POPS UP WHEN I RUN THE SEED BUT THE TABLE IS MADE AND EVERUTHING WORKS
// I CANT FIGURE OUT THE PROBLEM SO THIS MIGHT NEVER GET FIXED.

async function build_repo_table() {
  try {
    await client.query(`
        DROP TABLE IF EXISTS repo;
        `);
  } catch (error) {
    console.log("error dropping repo table db/seed/repo_seed.js", error);
  }
  try {
    await client.query(`
    CREATE TABLE repo (
      repo_id SERIAL PRIMARY KEY,
      title VARCHAR(255) UNIQUE,
      repo_info TEXT DEFAULT 'enter info here',
      creator_id INTEGER DEFAULT 1,
      allowed_user TEXT[] DEFAULT ARRAY[]::TEXT[],
      connected_groups TEXT[] DEFAULT ARRAY[]::TEXT[],
      repo_about JSONB DEFAULT '{"creator_name": "enter name", "date_created": "1/1/2000", "description": "enter description here"}',
      repo_active BOOLEAN DEFAULT true,
      is_public BOOLEAN DEFAULT false
  );
  
        `);
  } catch (error) {
    console.log("Error creating repo table: ", error);
  }
}

module.exports = build_repo_table;


//? KEY FROM CREATE TABLE
//! FEATURE TO ADD
// NOTE

//? repo_id SERIAL PRIMARY KEY,
//! I want this to be a code like u9023n8

//? allowed_user TEXT[] DEFAULT ARRAY[]::TEXT[],
//      TEXT[] = ARRAY OF TEXT || DEFAULT ARRAY[]::TEXT[] = DEFALT IS ARRAY OF TEXT

//? can_modify JSONB[] DEFAULT ARRAY['{}', '{}']::JSONB[],
//      objects in arrays needs to be stored as JSONB objects
//!      will store all info from each Column [Color, who can modify, ect]

//? repo_about JSONB DEFAULT '{"creator_name": "enter name", "date_created": "1/1/2000", "description": "enter description here"}',
//      JSONB object to store info from an about page //!eventually

//? repo_active BOOLEAN DEFAULT true,
//! for eventual growth stability
// to reactivate a repo if admin accidentally deletes or they need a reactivation for some reason

//? sections NUMERIC DEFAULT 3
// tells the program how many collude of options to include
