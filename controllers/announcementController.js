const Announcement = require("../models/announcementModel");

// Create announcement
exports.createAnnouncement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const announcement = new Announcement({ title, description, createdBy: req.user.id });
    await announcement.save();
    res.status(201).json(announcement);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all announcements
exports.getAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteAnnouncement = async (req, res) => {
  try {
    const announcement = await Announcement.findByIdAndDelete(req.params.id);
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.updateAnnouncement = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const announcement = await Announcement.findById(id);
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    // Update fields
    if (title) announcement.title = title;
    if (description) announcement.description = description;

    await announcement.save();

    res.json({ message: "Announcement updated successfully", announcement });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

