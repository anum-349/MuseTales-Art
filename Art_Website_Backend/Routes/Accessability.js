const express = require("express");
const router = express.Router();
const Accessibility = require("../Models/Accessability"); 

router.post("/accessibility", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const submission = new Accessibility({ name, email, message });
        await submission.save();

        res.status(201).json({ message: "Form submitted successfully!", submission });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
});

router.get("/accessibility", async (req, res) => {
    try {
        const data = await Accessibility.find().sort({ createdAt: -1 });
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.get("/accessibility/:id", async (req, res) => {
    try {
        const submission = await Accessibility.findById(req.params.id);
        if (!submission) {
            return res.status(404).json({ message: "Submission not found" });
        }
        return res.status(200).json(submission);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.put("/accessibility/:id", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const updated = await Accessibility.findByIdAndUpdate(
            req.params.id,
            { name, email, message },
            { new: true, runValidators: true }
        );

        if (!updated) {
            return res.status(404).json({ message: "Submission not found" });
        }

        return res.status(200).json({ message: "Updated successfully", updated });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

router.delete("accessibility/:id", async (req, res) => {
    try {
        const deleted = await Accessibility.findByIdAndDelete(req.params.id);
        if (!deleted) {
            return res.status(404).json({ message: "Submission not found" });
        }
        return res.status(200).json({ message: "Deleted successfully" });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});

module.exports = router;
