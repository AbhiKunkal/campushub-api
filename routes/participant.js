const express = require('express');
const router = express.Router();
const {
  createParticipant,
  getAllParticipants,
  getParticipant,
  updateParticipant,
  deleteParticipant
} = require('../controllers/participantController');
const authenticate = require('../middleware/auth');

// Public route (no token required)
router.post('/', createParticipant);

// Protect all routes below with authentication
router.use(authenticate);

router.get('/', getAllParticipants);
router.get('/:id', getParticipant);
router.put('/:id', updateParticipant);
router.delete('/:id', deleteParticipant);

module.exports = router;
