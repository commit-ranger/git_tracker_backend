const client = require("../../db/client");


// TODO: FIND REPO BY TITLE
async function find_repo_by_title(repo_title) {
  try {
    const { rows } = await client.query(
      `
            SELECT * FROM repo
            WHERE "title" = $1;
        `,
      [repo_title]
    );

    return rows[0];
  } catch (error) {
    console.log("find repo by title ERROR  function/repo/find_repo.js", error);
  }
}
//!------------------------------------------------------------------------

// TODO: FIND REPO BY ID

async function find_repo_by_id(repo_id) {
  try {
    const { rows } = await client.query(
      `
            SELECT * FROM repo
            WHERE "repo_id" = $1;
        `,
      [repo_id]
    );
    return rows[0];
  } catch (error) {
    console.log("find repo by title ERROR  function/repo/find_repo.js", error);
  }
}
//!------------------------------------------------------------------------

//TODO: GET ALL REPOS

async function get_all_repos() {
    try {
      const { rows } = await client.query(`
        SELECT * FROM repo
        ;
        `);
      return rows;
    } catch (error) {
      console.log("error with get_all_repos functions/repo/find_repo.js", error);
    }
  }


  //!------------------------------------------------------------------------


  module.exports = {get_all_repos, find_repo_by_title, find_repo_by_id}