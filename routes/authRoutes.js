const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/authController");
const authMiddleware = require("../middleware/auth");
const roleMiddleware = require("../middleware/role");
const { createAnnouncement } = require("../controllers/announcementController");


// Example usage
router.post("/announcements", authMiddleware, roleMiddleware(["admin", "teacher"]), createAnnouncement);


router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);
router.post("/api-key", authMiddleware, authCtrl.generateApiKey);

module.exports = router;