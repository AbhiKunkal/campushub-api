const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);


// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const announcementRoutes = require("./routes/announcement");
app.use("/api", announcementRoutes);

const eventRoutes = require("./routes/event");
app.use("/api", eventRoutes);

app.use("/api/clubs", require("./routes/club"));

const participantRoutes = require('./routes/participant');
app.use('/api/participants', participantRoutes);

const feedbackRoutes = require("./routes/feedbackRoutes");
app.use("/api/feedbacks", feedbackRoutes);

const statsRoutes = require("./routes/statsRoutes");
app.use("/api/stats", statsRoutes);


