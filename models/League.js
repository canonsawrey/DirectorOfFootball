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
  },
  // Describes the 'stage' the league is in. Can be 'setup' or 'in_progress'
  // TODO potentially make enum? Or some other
  in_progress: {
    type: Boolean,
    required: true
  },
  clubs: {
    type: [],
    required: true
  }
});

module.exports = League = mongoose.model('league', LeagueSchema);
