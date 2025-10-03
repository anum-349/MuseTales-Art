const mongo = require("mongoose")

const collection = mongo.Schema({
    name: {
        type: String,
        required: true,      
    },
    detail: {
        type: String,
        required: true,      
    },
    seniorCurator: {
        type: String,
        required: true,      
    },
    totalArtWorks: {
        type: Number,
        required: true,
        min: 1,
        max: 9999,
    },
    profile: {
        type: String,
        required: true,      
    },
    link: {
        type: String,
        required: true,      
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("CollectionData", collection)