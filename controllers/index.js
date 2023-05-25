const router = require('express').Router();
const inventoryRoutes = require('./api/inventory-routes');
const weaponsRoutes = require('./api/weapons-routes');
const powersRoutes = require('./api/powers-routes');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;