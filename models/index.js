const Inventory = require('./inventory');
const Powers = require('./powers');
const Weapons = require('./weapons');
const Item = require("./item");
const User = require("./user");

Weapons.belongsTo(Inventory, {
    foreignKey: 'inventory_id'
  });

Inventory.hasMany(Weapons, {
    foreignKey: 'inventory_id',
    onDelete: 'CASCADE',
    })

Powers.belongsTo(Inventory, {
    foreignKey: 'inventory_id'
    });

Inventory.hasMany(Powers, {
    foreignKey: 'inventory_id',
     onDelete: 'CASCADE',
    });

Item.belongsTo(Inventory, {
    foreignKey: 'inventory_id'
    });
    
Inventory.hasMany(Item, {
    foreignKey: 'inventory_id',
    onDelete: 'CASCADE',
    });

Inventory.belongsTo(User, {
    foreignKey: 'user_id'
    });
        
User.hasMany(Inventory, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
     });

module.exports = {
    Inventory,
    Powers,
    Weapons,
    User,
    Item,
};