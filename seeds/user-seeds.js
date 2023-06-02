const { User } = require('../models');

const userData = [
    {
        inventory_id: 1,
      },
     
];

const seedUser = () => 
User.bulkCreate(userData);

module.exports = seedUser;