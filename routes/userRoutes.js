const express = require("express");
const { getProfile, updateProfile } = require("../controllers/userController");
const protect = require("../middleware/authmiddleware");
const router = express.Router();

router.get("/profile", protect, getProfile);
router.put("/profile", protect, updateProfile);

module.exports = router;
