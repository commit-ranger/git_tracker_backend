
const bcrypt = require("bcrypt");

async function password_hasher(password_to_be_hashed){
    const saltRound = await bcrypt.genSalt(8)
    const myHashedPassword = await bcrypt.hash(password_to_be_hashed, saltRound)
    return myHashedPassword
}

module.exports = password_hasher