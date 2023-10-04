const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class MerchTag extends Model {}

MerchTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    merch_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'merch',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'product_tag',
  }
);

module.exports = MerchTag;
