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

//IMPORTANT 
//TODO ADD A DATAPATH TO FOLDERS 
// it can be an array that is created when it is formed, by taking the datapath of the parent folder and adding the parent folder. 
// main can be main. then it has each folder in an array which can be targeted to go back a section.  

