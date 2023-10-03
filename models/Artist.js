const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "artist",
  }
);

module.exports = Artist;