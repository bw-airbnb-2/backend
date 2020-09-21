exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          username: "Chris",
          password: "12345",
          first_name: "Christopher",
          last_name: "Harwell",
          address: "1234 Main St, Somewhere, OH, 12345",
          age: 26,
          birthday: "10 - 14 - 1994",
          country: "USA",
        },
      ]);
    });
};
