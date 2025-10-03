const mongoose = require("mongoose");

const AccessibilitySchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Accessibility", AccessibilitySchema);