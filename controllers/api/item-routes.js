const router = require('express').Router();
const {Item} = require('../../models');

router.get('/', async (req, res) => {
    //find Item
    try {
        const itemData = await Item.findAll();
        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one item by its `id` value
    try {
      const itemData = await Item.findByPk(req.params.id);
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    // create a new item
    try {
      const itemData = await Item.create(req.body);
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const itemData = await Item.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;