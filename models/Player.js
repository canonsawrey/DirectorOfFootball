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
    type: Integer,
    default: 99
  },
  shot: {
    type: Integer,
    default: 99
  },
  pass: {
    type: Integer,
    default: 99
  },
  dribble: {
    type: Integer,
    default: 99
  },
  phys: {
    type: Integer,
    default: 99
  },
  def: {
    type: Integer,
    default: 99
  }
});

module.exports = Player = mongoose.model('player', PlayerSchema);
