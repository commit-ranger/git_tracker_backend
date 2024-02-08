const client = require("../client")

async function build_folder_table(){
    try {
        await client.query(`
        DROP TABLE IF EXISTS folder;
        `)
    } catch (error) {
        console.log("error dropping repo table db/seed/file_seed.js", error)
    }
    try {
        await client.query(`
        CREATE TABLE folder(
            folder_id SERIAL PRIMARY KEY,
            repo_id TEXT,
            title VARCHAR(255),
            notes TEXT DEFAULT "insert notes here"
        )
        `)
    } catch (error) {
        console.log("error creating file table db/seed/file_seed.js", error)
    }
}

module.exports = build_folder_table

//? folder_id SERIAL PRIMARY KEY,
//!     I want this to be a code like nj8d934

//? repo_id TEXT,
//      Connection to the host repo

//? title VARCHAR(255),
//      Title of the folder

//? notes TEXT DEFAULT "insert notes here"
//!         eventual expandability

