const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class ArtistGenre extends Model {}

ArtistGenre.init(
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
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'artist',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'artist_genre',
  }
);

module.exports = ArtistGenre;