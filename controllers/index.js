const router = require('express').Router();
const apiRoutes = require('./api');
const pageRoutes = require('./page-routes');
const dashboardRoutes = require('./dashboard-routes');
const homeRoutes = require('./home-routes.js');



router.use('/api', apiRoutes);
router.use('/', pageRoutes);
router.use('/dashboard', dashboardRoutes);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;