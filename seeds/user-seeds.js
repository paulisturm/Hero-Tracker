const { User } = require('../models');

const userData = [
    {
        inventory_id: 1,
        user_email: "paul@mail.com"
      },
     
];

const seedUser = () => 
User.bulkCreate(userData);

module.exports = seedUser;