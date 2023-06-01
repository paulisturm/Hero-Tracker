const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Powers extends Model {}

Powers.init(
   {
    id: {
        type: DataTypes.INTEGER,
        allowsNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      power_name: {
        type: DataTypes.STRING,
        allowsNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      power_type: {
        type: DataTypes.STRING,
        allowsNull: false
      },
      power_damage: {
        type: DataTypes.INTEGER,
        allowsNull: false
      }
   },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'powers',
      }
);

module.exports = Powers;