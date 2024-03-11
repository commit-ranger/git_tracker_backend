const create_folder = require("../../../functions/Folder/add_folder")


async function fill_db_with_folders(){
try {
    await create_folder(2)
    await create_folder(2)
    await create_folder(2)
} catch (error) {
    console.log("error w/ batch folder creation seed/filler_data,folder_seed_data.js", error)
}
}

module.exports = fill_db_with_folders