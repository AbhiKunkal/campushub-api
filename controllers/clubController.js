const Club = require("../models/clubModel");

const createClub = async (req, res) => {
  try {
    const club = await Club.create(req.body);
    res.json({ message: "Club created successfully", club });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllClubs = async (req, res) => {
  try {
    const clubs = await Club.find();
    res.json(clubs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getClubById = async (req, res) => {
  try {
    const club = await Club.findById(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json(club);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club updated successfully", club });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteClub = async (req, res) => {
  try {
    const club = await Club.findByIdAndDelete(req.params.id);
    if (!club) return res.status(404).json({ message: "Club not found" });
    res.json({ message: "Club deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createClub,
  getAllClubs,
  getClubById,
  updateClub,
  deleteClub,
};
