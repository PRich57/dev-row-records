const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Artist extends Model {}

Artist.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "artist",
  }
);

module.exports = Artist;