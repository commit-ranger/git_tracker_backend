const client = require("../../db/client");

async function change_selected_section (section_checked, file_id){

    //important this is all wrong 
    try {

        const { rows } = await client.query(
          `
                UPDATE file
                SET section_checked = $1
                WHERE file_id = $2
                RETURNING*;
            `,
          [section_checked, file_id]
        );
        console.log(file_id, section_checked)
        return rows;
      } catch (error) {
        console.log("Update section checked change ERROR  function/file/mod_file.js", error);
      }

}

module.exports = change_selected_section