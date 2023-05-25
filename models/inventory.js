const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Inventory extends Model {}

Inventory.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    item_name: {
        type: DataTypes.STRING,
        allowsNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowsNull: false
    },
    item_weight: {
        type: DataTypes.INTEGER,
        allowsNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Inventory;