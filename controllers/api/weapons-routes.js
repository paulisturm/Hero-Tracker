const router = require('express').Router();
const {Weapons} = require('../../models');

router.get('/', async (req, res) => {
    //find Weapons
    try {
        const weaponsData = await Weapons.findAll();
        res.status(200).json(weaponsData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    // find one item by its `id` value
    try {
      const weaponsData = await Weapons.findByPk(req.params.id);
      res.status(200).json(weaponsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    // create a new item
    try {
      const weaponsData = await Weapons.create(req.body);
      res.status(200).json(weaponsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value
    try {
      const weaponsData = await Weapons.destroy({
        where: {
          id: req.params.id
        }
      });
      res.status(200).json(weaponsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });


module.exports = router;