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
    // filename will be the name of the associated image
    filename: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
    artist_id: {
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
