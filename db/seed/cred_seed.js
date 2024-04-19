
const client = require("../client")

async function build_cred_table(){
    try {
        await client.query(`
        DROP TABLE IF EXISTS cred;
        `)
    } catch (error) {
        console.log("error dropping cred table db/seed/cred_seed.js", error)
    }
    try {
        await client.query(`
        CREATE TABLE cred(
            cred_id SERIAL PRIMARY KEY,
            repo_id INTEGER NOT NULL, 
            user_id INTEGER NOT NULL,
            view_only BOOLEAN DEFAULT true, 
            is_admin BOOLEAN DEFAULT false,
            log_access BOOLEAN DEFAULT false,
            accepted BOOLEAN DEFAULT false,
            is_active BOOLEAN DEFAULT true
        )
        `)
    } catch (error) {
        console.log("error creating cred table db/seed/cred_seed.js", error)
    }
}

module.exports = build_cred_table

//! acepted is to notify a person who has been invided to a repo. 

// this is going to fix my issue with identifying those who have access 
// and will help me add or restric optioins like the log, or assigning to other people or anything else,
// it will need repo id, creator id, the first and 


// repo_id
// user_id
// view only 
// connected group
// is admin 
// Log access
// can assign to other groups [other groups]
// is active
// 
