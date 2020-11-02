// models/Book.js

const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  pos: {
    type: String,
    required: true
  },
  pace: {
    type: Number,
    default: 99
  },
  shot: {
    type: Number,
    default: 99
  },
  pass: {
    type: Number,
    default: 99
  },
  dribble: {
    type: Number,
    default: 99
  },
  phys: {
    type: Number,
    default: 99
  },
  def: {
    type: Number,
    default: 99
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);
