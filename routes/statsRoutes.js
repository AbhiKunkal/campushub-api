const express = require("express");
const router = express.Router();
const Event = require("../models/Event");
const Participant = require("../models/participantModel");
const Feedback = require("../models/Feedback");

// GET /api/stats/summary
router.get("/summary", async (req, res) => {
  try {
    const totalEvents = await Event.countDocuments();
    const totalParticipants = await Participant.countDocuments();
    const totalFeedbacks = await Feedback.countDocuments();

    const avgRatingObj = await Feedback.aggregate([
      { $group: { _id: null, avgRating: { $avg: "$rating" } } }
    ]);
    const avgRating = avgRatingObj[0]?.avgRating || 0;

    // Get event with the highest number of registrations
    const popularEvent = await Event.findOne().sort({ participants: -1 }).limit(1).populate("participants");

    res.json({
      totalEvents,
      totalParticipants,
      totalFeedbacks,
      avgRating: avgRating.toFixed(2),
      mostPopularEvent: popularEvent ? {
        id: popularEvent._id,
        name: popularEvent.name,
        registrations: popularEvent.participants.length
      } : null
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
