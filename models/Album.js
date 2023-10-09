const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Album extends Model {}

Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    album_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "artist",
        key: "id",
      },
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "album",
  }
);

module.exports = Album;
