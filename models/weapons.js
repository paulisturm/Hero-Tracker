const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Weapons extends Model {}

Weapons.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowsNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        weapon_name: {
            type: DataTypes.STRING,
            allowsNull: false
        },
        attack_damage: {
            type: DataTypes.INTEGER,
            allowsNull: false
        },
        attack_speed: {
            type: DataTypes.INTEGER,
            allowsNull: false,
        }
        
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'weapons',
      }
);

module.exports = Weapons;