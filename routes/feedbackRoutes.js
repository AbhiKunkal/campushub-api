const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const verifyToken = require("../middleware/verifyToken");

// POST /api/feedbacks
router.post("/", verifyToken, async (req, res) => {
  try {
    const { eventId, message, rating } = req.body;

    const feedback = new Feedback({
      userId: req.user._id,
      eventId,
      message,
      rating,
    });

    await feedback.save();
    res.json({ message: "Feedback submitted successfully", feedback });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// GET /api/feedbacks
router.get("/", verifyToken, async (req, res) => {
  try {
    const { eventId } = req.query;
    const filter = eventId ? { eventId } : {};

    const feedbacks = await Feedback.find(filter)
      .populate("userId", "name email")
      .populate("eventId", "title description");

    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch feedbacks" });
  }
});

// PUT /api/feedbacks/:id
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ message: "Feedback updated successfully", feedback });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/feedbacks/:id
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Feedback.findByIdAndDelete(req.params.id);
    res.json({ message: "Feedback deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete feedback" });
  }
});

module.exports = router;
