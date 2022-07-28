const mongoose = require('mongoose'),
  saleSchema = new mongoose.Schema({
    buyerName: {
      type: String,
      trim: true,
    },
    salesagentNamee: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      
    },
    produce: {
      type: String,
    },
    branch: {
      type: String,
    },
  });

module.exports = mongoose.model('Sales', saleSchema);
