// controllers/participantController.js
const Participant = require('../models/participantModel');

const createParticipant = async (req, res) => {
  try {
    const participant = await Participant.create(req.body);
    res.json({ message: "Participant created successfully", participant });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getAllParticipants = async (req, res) => {
  const participants = await Participant.find().populate('eventId');
  res.json(participants);
};

const getParticipant = async (req, res) => {
  try {
    const participant = await Participant.findById(req.params.id).populate('eventId');
    if (!participant) return res.status(404).json({ error: "Not found" });
    res.json(participant);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateParticipant = async (req, res) => {
  try {
    const participant = await Participant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Participant updated successfully", participant });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteParticipant = async (req, res) => {
  try {
    await Participant.findByIdAndDelete(req.params.id);
    res.json({ message: "Participant deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createParticipant,
  getAllParticipants,
  getParticipant,
  updateParticipant,
  deleteParticipant
};
