// routes/api/players.js

const express = require('express');
const router = express.Router();

// Load player model
const League = require('../../models/League');

// @route GET api/players/test
// @description tests players route
// @access Public
router.get('/test', (req, res) => res.send('league route testing!'));

// @route GET api/players
// @description Get all players
// @access Public
router.get('/', (req, res) => {
  League.find()
    .then(leagues => res.json(leagues))
    .catch(err => res.status(404).json({ noleaguefound: 'No Leagues found' }));
});

// @route GET api/players/:id
// @description Get single player by id
// @access Public
router.get('/:id', (req, res) => {
  League.findById(req.params.id)
    .then(league => res.json(league))
    .catch(err => res.status(404).json({ noleaguefound: 'No League found' }));
});

// @route GET api/players
// @description add/save player
// @access Public
router.post('/', (req, res) => {
  League.create(req.body)
    .then(league => res.json({ msg: ':League added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this league' }));
});

// @route GET api/players/:id
// @description Update player
// @access Public
router.put('/:id', (req, res) => {
  League.findByIdAndUpdate(req.params.id, req.body)
    .then(league => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/players/:id
// @description Delete player by id
// @access Public
router.delete('/:id', (req, res) => {
  League.findByIdAndRemove(req.params.id, req.body)
    .then(league => res.json({ mgs: 'League entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a league' }));
});

module.exports = router;
