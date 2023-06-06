const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    inventory_id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        references: {
            model: "inventory",
            key: "id"
        }
    },
    email: {
        type: DataTypes.STRING,
        allowsNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowsNull: false,
        
    }

},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);

module.exports = User;