const Sequelize = require("sequelize");
require("dotenv").config();

PORT = 3306;

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASS,
      {
        host: "127.0.0.1",
        dialect: "mysql",
      }
    );

module.exports = sequelize;
