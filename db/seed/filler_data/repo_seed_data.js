const create_repo = require("../../../functions/repo/add_repo");

async function fill_db_with_repos(){
    await create_repo("in the beginning",2)
    await create_repo("not the begging ",2)
    await create_repo("tes1",2)
    await create_repo("test2",2)
    await create_repo("test3",2)
    await create_repo("test4",2)
}

module.exports = fill_db_with_repos