const Inventory = require('./inventory');
const Powers = require('./powers');
const Weapons = require('./weapons');

// Weapons.belongsTo(Inventory, {
//     foreignKey: 'inventory_id'
//   });

// Inventory.hasMany(Weapons, {
//     foreignKey: 'inventory_id',
//     onDelete: 'CASCADE',
//     })

// Inventory.belongsToMany(Weapons, {
//     through: Inventory,
//     as: 'inventory_weapons',
//     foreignKey: 'inventory_id'
//     });

// Weapons.belongsToMany(Inventory, {
//     through: Inventory,
//     as: 'inventory_weapons',
//     foreignKey: 'weapons_id'
//     })

module.exports = {
    Inventory,
    Powers,
    Weapons,
};