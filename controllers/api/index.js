const router = require('express').Router();
const inventoryRoutes = require('./inventory-routes');
const weaponsRoutes = require('./weapons-routes');
const powersRoutes = require('./powers-routes');
const userRoutes = require("./user-routes");
const itemRoutes = require("./item-routes")


router.use('/inventory', inventoryRoutes);
router.use('/weapons', weaponsRoutes);
router.use('/powers', powersRoutes);
router.use('/user', userRoutes);
router.use('/item', itemRoutes);

module.exports = router;