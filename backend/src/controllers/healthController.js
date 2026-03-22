const mongoose = require("mongoose");

const getHealth = (req, res) => {
  const dbConnected = mongoose.connection.readyState === 1;

  res.status(200).json({
    success: true,
    message: "Backend is running",
    database: dbConnected ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
};

module.exports = { getHealth };
