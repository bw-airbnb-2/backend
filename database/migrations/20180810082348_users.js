exports.up = function (knex) {
  return knex.schema
    .createTable("users", (users) => {
      users.increments();

      users.string("username", 255).notNullable().unique();
      users.string("password", 255).notNullable();
    })
    .createTable("listings", (tbl) => {
      tbl.increments();
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("name")
        .unsigned()
        .notNullable()
        .references("username")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.string("room_type", 255).notNullable();
      tbl.integer("min_num_nights").notNullable();
      tbl.string("location", 100).notNullable();
      tbl.float("price", 2).notNullable();
    })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("listings");
};
