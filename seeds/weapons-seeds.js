const { Weapons } = require('../models');

const weaponsData = [
    {
        weapon_name: 'Axe',
        attack_damage: 14,
        attack_speed: 4
      },
      {
        weapon_name: 'Sword',
        attack_damage: 8,
        attack_speed: 8
      },
      {
        weapon_name: 'Spear',
        attack_damage: 12,
        attack_speed: 7
      }  
];

const seedWeapons = () => 
Weapons.bulkCreate(weaponsData);

module.exports = seedWeapons;