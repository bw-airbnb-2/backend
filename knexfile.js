const dotenv = require("dotenv");
const pgConnection = process.env.DATABASE_URL || "postgres://bvppnfvo:9HMLQZci-CLsikh1J5u5tlCUj5xFDqQ0@ziggy.db.elephantsql.com:5432/bvppnfvo";

module.exports = {

    development: {
        client: "pg",
        connection: pgConnection,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: { directory: "./data/migrations" },
        seeds: { directory: "./data/seeds" },
    }
}