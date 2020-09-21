const pgConnection = process.env.DATABASE_URL || "postgres://gzsquhxpxatoff:84a8527cc51c2d3ece01d1238d84ef27c26dbe69516d4b9726d308b599a8e793@ec2-3-224-97-209.compute-1.amazonaws.com:5432/daolhiiqiolu30";

module.exports = {
  development: {
    client: 'sqlite3',
    connection: { filename: './database/auth.db3' },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations'
    },
    seeds: { directory: './database/seeds' },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./database/test.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
