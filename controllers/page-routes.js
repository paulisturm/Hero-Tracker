const router = require('express').Router();


// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    
    res.render('homepage', {

    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/', async (req, res) => {
//     try {
      
//       res.render('login', {
  
//       });
//     } catch (err) {
//       console.log(err);
//       res.status(500).json(err);
//     }
//   });

  // router.get('/', async (req, res) => {
  //   try {
      
  //     res.render('dashboard', {
  
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     res.status(500).json(err);
  //   }
  // });

module.exports = router;