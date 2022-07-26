const express = require('express'),
  mongoose = require('mongoose');

// Models
const Signup = require('../models/Signup');

const router = express.Router();

router.get('/Login', (req, res) => {
    res.render('Login')
});

// Sending data to DB
router.post('/', async (req, res) => {
  const signup = new Signup(req.body);
  await Signup.register(signup, req.body.password, (err) => {
    if (err) {
      res.status(400).render('Login', {
        title: 'Register',
      });
      console.log(err);
    } else {
      res.redirect('/login');
    }
  });
});

module.exports = router;
