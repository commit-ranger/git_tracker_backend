const client = require("../client")
const fill_db_with_users = require("./filler_data/user_seed_data")
const build_repo_table = require("./repo_seed")
const build_user_table = require("./users_seed")


async function initiate_database(){
    try {
        await build_repo_table()
        await build_user_table()
        console.log("finished creating the database")
        await fill_db_with_users()
        
    } catch (error) {
        console.log("seed.js error", error)
    }
    client.end()
    console.log("made it past client end")
}

initiate_database()