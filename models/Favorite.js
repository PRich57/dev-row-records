const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Favorite extends Model {}

Favorite.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "artist",
        key: "id",
      },
    },
    album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "album",
        key: "id",
      },
    },
    merch_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "merch",
        key: "id",
      },
    },
  }
);

