const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");

// Create Event
router.post(
  "/events",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  createEvent
);

// Get Events
router.get("/events", authMiddleware, getEvents);

// Update Event
router.put(
  "/events/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  updateEvent
);

// Delete Event
router.delete(
  "/events/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  deleteEvent
);

module.exports = router;

