const { Inventory } = require('../models');

const inventoryData = [
    {
    item_id: 1,
    powers_id: 1,
    weapons_id: 1
    },
    {
    item_id: 2,
    powers_id: 2,
    weapons_id: 2
    },
    
];

const seedInventory = () =>

Inventory.bulkCreate(inventoryData);

module.exports = seedInventory;