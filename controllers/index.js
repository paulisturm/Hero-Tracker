const router = require('express').Router();
const apiRoutes = require('./api');
const pageRoutes = require('./page-routes')

router.use('/api', apiRoutes);
router.use('/', pageRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;