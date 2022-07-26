const mongoose = require('mongoose'),
  passportLocalMongoose = require('passport-local-mongoose'),
  signupSchema = new mongoose.Schema({
    username: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      required: 'Please enter a Valid Email',
    },
    password: {
      type: String,
    },
  });

signupSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

//exporting our schema
module.exports = mongoose.model('Signup', signupSchema);
