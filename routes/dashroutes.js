const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('dashboard', { title: 'Farm Manager Dashboard' });
});

module.exports = router;
