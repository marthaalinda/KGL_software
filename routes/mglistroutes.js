const express = require('express'),
  Manager = require('../models/Manager');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const mgrDetails = await Manager.find();
    res.render('allmgrs', { users: mgrDetails, title: 'Manager Details' });
  } catch (err) {
    console.log(err);
    res.send('Failed to retrieve Manager Details.');
  }
});

router.post('/delete', async (req, res) => {
  try {
    await Manager.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (error) {
    res.status(400).send('Unable to delete item in the database');
  }
});

module.exports = router;
