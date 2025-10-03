const mongo = require("mongoose")

const testimonals = mongo.Schema({
    title: {
        type: String,
        required: true,      
    },
    description: {
        type: [String],
        required: true,      
    },
    author: {
        type: String,
        required: true,      
    },
    country: {
        type: String,
        required: true,      
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("Testimonals", testimonals)