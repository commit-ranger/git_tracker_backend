const create_user = require("../../../functions/users/add_user");

async function fill_db_with_users() {
  try {
    await create_user({
      firstName: "Aldolfo",
      lastName: "Freddy",
      username: "test",
      password: "AldoFreddy@123",
      email: "aldolfo.freddy@example.com",
      phone: "(123)456-7891",
    });

    await create_user({
      firstName: "Maria",
      lastName: "Gonzalez",
      username: "mariagonzalez",
      password: "test",
      email: "maria.gonzalez@example.com",
      phone: "(234) 567-8912",
    });
    await create_user({
      firstName: "John",
      lastName: "Doe",
      username: "johndoe",
      password: "test",
      email: "john.doe@example.com",
      phone: "(345) 678-9123",
    });

    await create_user({
      firstName: "Emily",
      lastName: "Smith",
      username: "emilysmith",
      password: "test",
      email: "emily.smith@example.com",
      phone: "(456) 789-1234",
    });

    await create_user({
      firstName: "Michael",
      lastName: "Johnson",
      username: "michaeljohnson",
      password: "test",
      email: "michael.johnson@example.com",
      phone: "(567) 891-2345",
    });
  } catch (error) {
    console.log(
      `error filling the users db db/seed/seed_data/user_seed_data`,
      error
    );
  }
}

module.exports = fill_db_with_users;
