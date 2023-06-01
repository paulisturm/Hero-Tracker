const { Item } = require('../models');

const itemData = [
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

const seedItem = () =>

Item.bulkCreate(itemData);

module.exports = seedItem;