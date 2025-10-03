const mongo = require("mongoose")

const exhibition = mongo.Schema({
    year: {
        type: Number,
        required: true,
        min: 1000,
        max: 2025,
    },
    title: {
        type: String,
        required: true,
    },
    organization: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
})

const authorData = mongo.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    recognization: {
        type: [String],
        required: true,
    },
    joining: {
        type: Number,
        required: true,
        min: 1000,
        max: 2025,
    },
    role: {
        type: String,
        required: true,
    },
    followers: {
        type: Number,
        required: true,
    },
    exhibitions: [exhibition],
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("AuthorData", authorData)