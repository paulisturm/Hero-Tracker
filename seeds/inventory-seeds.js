const { Inventory } = require('../models');

const inventoryData = [
    {
    item_name: 'Wool Hat',
    price: 5,
    item_weight: 1
    },
    {
    item_name: 'Wool Hat',
    price: 5,
    item_weight: 1
    },
    {
    item_name: 'Wool Hat',
    price: 5,
    item_weight: 1
    }
];

const seedInventory = () =>

Inventory.bulkCreate
(inventoryData);

module.exports = inventoryProducts;