const mongo = require("mongoose")

const curatorData = mongo.Schema({
    title: {
        type: String,
        required: true,      
    },
    images: {
        type: [String],
        required: true,      
    },
    profile: {
        type: String,
        required: true,      
    },
    curatorName: {
        type: String,
        required: true,      
    },
    role: {
        type: String,
        required: true,      
    },
    category: {
        type: String,
        required: true,      
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("CuratorData", curatorData)