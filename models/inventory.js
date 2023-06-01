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
    item_id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        references: {
            model: "item",
            key: "id"
        }
    },
    powers_id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        references: {
            model: "powers",
            key: "id"
        }
    },
    weapons_id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        references: {
            model: "weapons",
            key: "id"
        }
    }
    
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'inventory',
  }
);

module.exports = Inventory;