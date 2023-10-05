const Sequelize = require("sequelize");
require("dotenv").config();

// I don't know if there's an environment variable we'll eventually need to set this to for server-side hosting, but that would replace the "null" here
PORT = 3306;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: "127.0.0.1",
    dialect: "mysql",
    port: PORT,
  }
);

module.exports = sequelize;
