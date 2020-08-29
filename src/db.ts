import knex from "knex";

export default knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
});
