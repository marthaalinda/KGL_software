const express = require('express'),
  passport = require('passport'),
  mongoose = require('mongoose');

// Models
// const Manager = require('../models/Manager');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('mgrlogin', { title: 'Farm Manager Login' });
});

router.post(
  '/',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/dashboard');
  }
);

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
