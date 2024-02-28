const client = require("../client")

async function build_file_table(){
    try {
        await client.query(`
        DROP TABLE IF EXISTS file;
        `)
    } catch (error) {
        console.log("error dropping repo table db/seed/file_seed.js", error)
    }
    try {
        await client.query(`
        CREATE TABLE file(
            file_id SERIAL PRIMARY KEY,
            datapath TEXT DEFAULT '...',
            filename VARCHAR(255) DEFAULT 'File name',
            repo_id TEXT,
            folder_id TEXT,
            section_checked INT DEFAULT 1
        )
        `)
    } catch (error) {
        console.log("error creating file table db/seed/file_seed.js", error)
    }
}

module.exports = build_file_table

//? file_id SERIAL PRIMARY KEY,
//!     I want this to be a code like oi409fjr

//? datapath TEXT DEFAULT "...",
//! eventually this will be able to be imput via git hub api pull

//? title VARCHAR(255),
//      they will be able to change the title of the file shown in the tracker only
//      FOR WHEN THEY HAVE 25 index.js One can be homepage index.js etc. 

//? filename VARCHAR(255),
//      actual filename of file
//!     file path as well 

//? section_checked INT DEFAULT 0
//      which of the radio buttons is selected 
//      SECTION 0 = not assigned


//Important IS THIS REALLY NECESSARY?   
//? repo_id TEXT,
//      the repo ID this is under

//? folder_id TEXT,
//      This is going to be the folder inside of the REPO the file is inside
