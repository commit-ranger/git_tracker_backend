const client = require("../client")
const build_repo_table = require("./repo_seed")
const build_user_table = require("./users_seed")


async function initiate_database(){
    try {
        await build_repo_table()
        await build_user_table()
        console.log("finished creating the database")
        
    } catch (error) {
        console.log("seed.js error", error)
    }
    client.end()
    console.log("made it past client end")
}

initiate_database()