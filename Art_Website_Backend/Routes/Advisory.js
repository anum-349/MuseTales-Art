const express = require("express");
const router = express.Router();
const Inquiry = require("../Models/Advisory");

// ✅ CREATE (POST)
router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, budget, detail } = req.body;

    if (!firstName || !lastName || !email || !budget) {
      return res.status(400).json({ message: "All required fields must be filled" });
    }

    const inquiry = new Inquiry({ firstName, lastName, email, budget, detail });
    await inquiry.save();

    return res.status(201).json({ message: "Form submitted successfully", inquiry });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ READ ALL
router.get("/", async (req, res) => {
  try {
    const data = await Inquiry.find().sort({ createdAt: -1 });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ READ ONE
router.get("/:id", async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ message: "Inquiry not found" });
    return res.status(200).json(inquiry);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ UPDATE
router.put("/:id", async (req, res) => {
  try {
    const { firstName, lastName, email, budget, detail } = req.body;

    const updated = await Inquiry.findByIdAndUpdate(
      req.params.id,
      { firstName, lastName, email, budget, detail },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Inquiry not found" });
    return res.status(200).json({ message: "Updated successfully", updated });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

// ✅ DELETE
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Inquiry.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Inquiry not found" });
    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
});

module.exports = router;
