const express = require('express');
const router = express.Router();
const { register, getAllIntellectuals } = require('../controller/IntellectualController');


router.get('/', (req, res) => {
  res.render('form');
});

router.post('/register', register);


router.get('/all-intels', (req, res) => {
  res.render('password');
});


router.post('/all-intels',getAllIntellectuals);
module.exports = router;


