const create_new_file = require("../../../functions/file/add_file");

async function fill_db_with_file() {
  try {
    await create_new_file(2, 3);
    await create_new_file(2, 3);
    await create_new_file(2, 2);
    await create_new_file(2, 2);
    await create_new_file(2, 1);
    await create_new_file(2, 1);
  } catch (error) {
    console.l0g("error creating bil files seed/filler_data/file_seed_data.js", error)
  }

}

module.exports = fill_db_with_file;
