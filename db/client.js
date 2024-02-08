// connect to the postgres object inside of Node_Modules
const pg = require("pg");

const connectionString = process.env.DATABASE_URL || 'https://localhost:5432/git_tracker';

const client = new pg.Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;