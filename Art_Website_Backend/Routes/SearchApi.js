const express = require("express");
const mongoose = require("mongoose");
const Artist = require("../Models/AuthorDetails");
const Art = require("../Models/CategoryDetails");
const router = express.Router();

// Search API
router.get("/search", async (req, res) => {
    try {
        const { query, type, limit } = req.query;
        const searchLimit = parseInt(limit) || 5;

        if (!query) {
            return res.status(400).json({ message: "Query parameter is required" });
        }

        let result = [];

        if (type === "artist") {
            result = await Artist.find({
                name: { $regex: query, $options: "i" }
            }).limit(searchLimit);
        } else if (type === "art") {
            result = await Art.find({
                title: { $regex: query, $options: "i" }
            }).limit(searchLimit);
        } else {
            const artists = await Artist.find({
                name: { $regex: query, $options: "i" }
            }).limit(searchLimit);

            const arts = await Art.find({
                title: { $regex: query, $options: "i" }
            }).limit(searchLimit);

            result = { artists, arts };
        }

        res.status(200).json(result);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;
