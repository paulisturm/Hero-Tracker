const { Powers } = require('../models');

const powersData = [
    {
    power_name: 'Fireball',
    power_type: 'range',
    power_damage: 10
    },
    {
    power_name: 'Ice Punch',
    power_type: 'melee',
    power_damage: 6
    },
    {
    power_name: 'Heal',
    power_type: 'special',
    power_damage: 0
    },
];

const seedPowers = () => 
Powers.bulkCreate(powerData);

module.expoers = seedPowers;