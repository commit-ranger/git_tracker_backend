const client = require("../client")

async function build_log_table(){
    try {
        await client.query(`
        DROP TABLE IF EXISTS log;
        `)
    } catch (error) {
        console.log("error dropping log table db/seed/log_seed.js", error)
    }
    try {
        console.log("building log table")
        await client.query(`
        CREATE TABLE log(
            id SERIAL PRIMARY KEY,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            repo_id INTEGER,
            message TEXT
        )
        `)
    } catch (error) {
        console.log("error creating log table db/seed/log_seed.js", error)
    }
}

module.exports = build_log_table