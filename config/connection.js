const Sequelize = require("sequelize");

PORT = null || 3306;

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  provess.env.DB_PASS,
  {
    host: "localhost",
    dialect: "mysql",
    port: PORT,
  }
);

module.exports = sequelize;
