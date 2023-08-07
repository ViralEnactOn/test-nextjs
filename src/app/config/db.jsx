import knex from "knex";
import config from "./config";

const db = knex(config.development);

module.exports = db;
