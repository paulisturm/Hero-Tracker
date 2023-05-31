const seedInventory = require('./inventory-seeds');
const seedPowers = require('./powers-seeds');
const seedWeapons = require('./weapons-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedInventory();
  console.log('\n----- INVENTORY SEEDED -----\n');

  await seedPowers();
  console.log('\n----- POWERS SEEDED -----\n');

  await seedWeapons();
  console.log('\n----- WEAPONS SEEDED -----\n');

  process.exit(0);
};

seedAll();