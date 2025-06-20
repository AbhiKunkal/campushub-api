const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const { createAnnouncement, getAnnouncements, deleteAnnouncement,updateAnnouncement } = require("../controllers/announcementController");


router.post(
  "/announcements",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  createAnnouncement
);

router.get("/announcements", authMiddleware, getAnnouncements);

router.delete(
  "/announcements/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  deleteAnnouncement
);

router.put(
  "/announcements/:id",
  authMiddleware,
  roleMiddleware(["admin", "teacher"]),
  updateAnnouncement
);

module.exports = router;

