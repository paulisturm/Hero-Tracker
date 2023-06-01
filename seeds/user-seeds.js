const { User } = require('../models');

const userData = [
    {
        inventory_id: 1,
      }
     
];

const seedUser = () => 
User.bulkCreate(UserData);

module.expoers = seedUser;