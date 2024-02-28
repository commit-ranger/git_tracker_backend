const client = require("../../db/client");

// IMPORTANT NOTE
// WHEN CREATING A USER WE NEED TO LOCATE THE CREATOR ID AND MAKE SURE IT IS A USER THEN ADD THIS REPO_ID TO THE CREATORS_ID
// IMPORTANT NOTE

async function create_repo(title, creator_id) {
  try {
    const { rows } = await client.query(
      `
        INSERT INTO repo (title, creator_id)
        VALUES ($1, $2)
        RETURNING *;`,
      [title, creator_id]
    );
    console.log("repo created");
    return rows;
  } catch (error) {
    console.log("ERROR CREATING NEW REPO", error)
  }
}

module.exports = create_repo

//!: repo only needs a title and a user connected to create
// all other sections will be left to default
// YOU CAN MODIFY EVERYTHING ELSE LATER
