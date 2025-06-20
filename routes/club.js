const express = require("express");
const router = express.Router();
const {
  createClub,
  getAllClubs,
  getClubById,
  updateClub,
  deleteClub,
} = require("../controllers/clubController");
const authMiddleware = require("../middleware/auth");

router.post("/", authMiddleware, createClub);
router.get("/", getAllClubs);
router.get("/:id", getClubById);
router.put("/:id", authMiddleware, updateClub);
router.delete("/:id", authMiddleware, deleteClub);

module.exports = router;
