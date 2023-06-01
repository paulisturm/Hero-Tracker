const seedInventory = require('./inventory-seeds');
const seedPowers = require('./powers-seeds');
const seedWeapons = require('./weapons-seeds');
const seedItem = require('./item-seeds');
const seedUser = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  await seedUser();
  console.log('\n----- USER SEEDED -----\n');

  await seedInventory();
  console.log('\n----- INVENTORY SEEDED -----\n');

  await seedPowers();
  console.log('\n----- POWERS SEEDED -----\n');

  await seedWeapons();
  console.log('\n----- WEAPONS SEEDED -----\n');

  await seedItem();
  console.log('\n----- ITEM SEEDED -----\n');

  process.exit(0);
};

seedAll();