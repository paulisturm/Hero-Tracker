const router = require('express').Router();
const {Inventory} = require('../../models');

router.get('/', async (req, res) => {
    //find inventory
    try {
        const inventoryData = await Inventory.findAll();
        res.status(200).json(inventoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one item by its `id` value
    try {
      const inventoryData = await Inventory.findByPk(req.params.id);
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    // create a new item
    try {
      const inventoryData = await Inventory.create(req.body);
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const inventoryData = await Inventory.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(inventoryData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;