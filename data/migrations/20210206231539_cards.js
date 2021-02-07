exports.up = function(knex) {
    return knex.schema.createTable("cards", (tbl) => {
        tbl.increments().notNullable();

        tbl.float("card_limit", 2);
        tbl.float("total_usage", 2);
        tbl.float("balance", 2);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cards");
};