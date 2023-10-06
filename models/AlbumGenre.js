const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class AlbumGenre extends Model {}

AlbumGenre.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genre',
        key: 'id',
      },
    },
    album_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'album',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'album_genre',
  }
);

module.exports = AlbumGenre;