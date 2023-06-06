const { User } = require('../models');

const userData = [
    {
        inventory_id: 1,
        email: "paul@mail.com",
        password: "123"
      },
     
];

const seedUser = () => 
User.bulkCreate(userData);

module.exports = seedUser;