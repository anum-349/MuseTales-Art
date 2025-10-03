const mongo = require("mongoose")

const data = mongo.Schema({
    artId: {
        type: String,
        required: true,      
    },
    title: {
        type: String,
        required: true,      
    },
    price: {
        type: Number,
        required: true,  
        min: 100,
        max: 99999,
    },
    author: {
        type: String,
        required: true,      
    },
    detail: {
        type: String,
        required: true,      
    },
    size: {
        type: String,
        required: true,      
    },
    quantity: {
        type: Number,
        required: true,
        min: 1,
        max: 999,
    },
    image: {
        type: [String],
        required: true,   
    },
    mainImage: {
        type: String,
        required: true,      
    },
    country: {
        type: String,
        required: true,     
    },
    shipping: {
        type: String,
        required: true,     
    },
    trustScore: {
        type: String,
        required: true,     
    },
    category: {
        type: [String],
        required: true,     
    },
    likes: {
        type: Number,
        required: true,     
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("CategoryData", data)