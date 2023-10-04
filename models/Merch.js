const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Merch extends Model {}

Merch.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    merch_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        isFloat: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
    artist_id: {
      // Replacing artist_name with artist_id
      type: DataTypes.INTEGER,
      references: {
        model: "artist",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "merch",
  }
);

module.exports = Merch;
