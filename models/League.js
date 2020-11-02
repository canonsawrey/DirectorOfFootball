// models/Book.js

const mongoose = require('mongoose');

const LeagueSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  }
});

module.exports = League = mongoose.model('league', LeagueSchema);
