const { Inventory } = require('../models');

const inventoryData = [
    {
    item_id: 1,
    powers_id: 1,
    weapons_id: 1
    },
    
];

const seedInventory = () =>

Inventory.bulkCreate
(inventoryData);

module.exports = seedInventory;