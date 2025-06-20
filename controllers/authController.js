const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { v4: uuidv4 } = require("uuid");

exports.register = async (req, res) => {
  console.log("Register hit:", req.body);
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({
        msg: "Missing fields",
        received: { name, email, password, role },
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });

    res.status(201).json({ msg: "User registered ✅" });
  } catch (err) {
    res.status(500).json({ msg: "Registration failed", error: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.json({ token, role: user.role });
  } catch (err) {
    res.status(500).json({ msg: "Login failed", error: err.message });
  }
};

exports.generateApiKey = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.apiKey = uuidv4();
    await user.save();
    res.json({ apiKey: user.apiKey });
  } catch (err) {
    res.status(500).json({ msg: "API key error", error: err.message });
  }
};


