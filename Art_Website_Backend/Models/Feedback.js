const mongo = require("mongoose")

const feedback = mongo.Schema({
    name: {
        type: String,
        required: true,      
    },
    verification: {
        type: String,
        default: "Verified"      
    },
    comment: {
        type: String,
        required: true,      
    },
    detail: {
        type: String,
        required: true,      
    },
    rating: {
        type: String,
        required: true,      
    },
    days: {
        type: Number,
        required: true,  
        min: 1,
        max: 30,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("Feedback", feedback)