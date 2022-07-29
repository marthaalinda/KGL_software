const mongoose = require('mongoose'),
  newformSchema = new mongoose.Schema({
    buyerName: {
      type: String,
      trim: true,
    },
    salesagentNamee: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: Number,
    },
    amountdue: {
      type: Number,
      trim: true,
    },
    gender: {
      type: String,
    },
    produceName: {
      type: String,
    },
    tonnage: {
      type: Number,
      trim: true,
    },
    nationalId: {
      type: String,
      trim: true,
    },
    dispatch: {
      type: Date,
      trim: true,
    },
    location: {
      type: String,
      trim: true,
    },
    dueDate: {
      type: Date,
      trim: true,
    },
  });

module.exports = mongoose.model('Form', newformSchema);
