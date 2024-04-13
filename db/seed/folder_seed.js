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
            parent_folder_id TEXT,
            is_main_folder BOOLEAN DEFAULT false,
            title VARCHAR(255) DEFAULT 'New Folder',
            repo_id TEXT,
            description TEXT DEFAULT 'enter description here',
            notes TEXT DEFAULT 'insert notes here'
        )
        `)
    } catch (error) {
        console.log("error creating folder table db/seed/folder_seed.js", error)
    }
}

module.exports = build_folder_table

//? folder_id SERIAL PRIMARY KEY,
//!     I want this to be a code like nj8d934

//? repo_id TEXT,
//      Connection to the host repo


//? title VARCHAR(255),
//      Title of the folder

//? description TEXT DEFAULT "enter description here"


//? notes TEXT DEFAULT "insert notes here"
//!         eventual expandability

