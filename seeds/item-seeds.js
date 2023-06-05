const { Item } = require('../models');

const itemData = [
    {
    item_name: 'Wool Hat',
    price: 5,
    item_weight: 1
    },
    {
    item_name: 'Potion',
    price: 3,
    item_weight: 1
    },
    {
    item_name: 'Gold Crown',
    price: 50,
    item_weight: 6
    },
];

const seedItem = () =>

Item.bulkCreate(itemData);

module.exports = seedItem;