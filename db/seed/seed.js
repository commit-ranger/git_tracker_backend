const client = require("../client")
// FILL TABLES
const fill_db_with_repos = require("./filler_data/repo_seed_data")
const fill_db_with_users = require("./filler_data/user_seed_data")
// BUILD TABLES
const build_file_table = require("./file_seed")
const build_folder_table = require("./folder_seed")
const build_repo_table = require("./repo_seed")
const build_user_table = require("./users_seed")


async function initiate_database(){
    try {
        await build_repo_table()
        await build_user_table()
        await build_folder_table()
        await build_file_table()
        console.log("finished creating the database")
        await fill_db_with_users()
        await fill_db_with_repos()
        
    } catch (error) {
        console.log("seed.js error", error)
    }
    client.end()
    console.log("made it past client end")
}

initiate_database()