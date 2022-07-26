
const express = require('express'),
  config = require('./config/database'),
  path = require('path'),
  mongoose = require('mongoose'),
  passport = require('passport');
require('dotenv').config();

// Express Session
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});

// Models
  //const Signup = require('./models/signUp');

// Routes
// const homeroutes = require("./routes/homeroutes");
//    const registerRoutes = require('./routes/registerroutes');
// const loginRoutes = require('./routes/loginroutes');
//  const salesRoutes = require('./routes/salesroutes');
 //  const mglistRoutes = require('./routes/mglistroutes');
  const pdtRoutes = require('./routes/pdtroutes');

// Database


//Initialising server
const server = express();
//const passport= require("passport");

// Mongoose Set up
//connect mongoose
mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
// Check connection
db.once('open', function () {
  console.log('Connected to MongoDB');
});
// Check for db errors
db.on('error', function (err) {
  console.error(err);
});

// Setting view Engine.
server.set('view engine', 'pug');
server.set('views', './views');

// Middleware
// Express Middleware
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, 'public')));
server.use(expressSession);
// Initialising Passport
server.use(passport.initialize());
server.use(passport.session());
// Configuring Passport Middleware
//    passport.use(Signup.createStrategy());
//    passport.serializeUser(Signup.serializeUser());
//    passport.deserializeUser(Signup.deserializeUser());
// Login Checker
// /const loginChecker = function (req, res, next) {
//   if (req.path != '/login' && req.path != '/' && !req.session.user) {
//     res.redirect('/');
//   }
//   next();
// };/
// server.use(loginChecker);

// Routing
//   server.use('/', registerRoutes);
// server.use('/login', loginRoutes);
// server.use('/', loginRoutes);
// server.use('/sales', salesRoutes);
// server.use('/managers', mglistRoutes);
  server.use('/', pdtRoutes);
// server.use('/editproduct', pdtRoutes);


// Non Existing Routes and Server Port
// handling non existing routes
server.get('*', (req, res) => {
  res.status(404).send('OOPS! WRONG ADDRESS');
});

// server
server.listen(3002, () => console.log('Listening on Port 3002'));

  