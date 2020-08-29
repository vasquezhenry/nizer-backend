import knex from "knex";
import {config} from "dotenv"

config();

export default knex({
  client: "pg",
  connection: {
    host: "localhost",
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
  }
});
