const mongo = require('mongoose')

const aboutArtWork = mongo.Schema({
    about: {
        type: String,
        required: true,      
    },
    year: {
        type: Number,
        required: true, 
        min: 1000,
        max: 2025,   
    },
    subject: {
        type: String,
        required: true,      
    },
    styles: {
        type: [String],
        required: true,      
    },
    mediums: {
        type: [String],
        required: true
    }
})

const detailAndDimensions = mongo.Schema({
    rarity: {
        type: String,
        required: true,      
    },
    size: {
        type: String,
        required: true,      
    },
    readyToHang: {
        type: String,
        required: true,      
    },
    frame:{
        type: String,
        required: true,      
    }, 
    authenticity: {
        type: String,
        required: true,      
    },
    packaging: {
        type: String,
        required: true,      
    },
})

const shippingsAndReturns = mongo.Schema({
    cost: {
        type: String,
        required: true,      
    },
    time: {
        type: String,
        required: true,      
    },
    returns: {
        type: String,
        required: true,      
    },
    handling: {
        type: String,
        required: true,      
    },
    shipsFrom: {
        type: String,
        required: true,      
    },
    customs: {
        type: String,
        required: true,      
    },
})

const artData = mongo.Schema({
    artId: {
        type: String,
        required: true,      
    },
    aboutArtWork: aboutArtWork,
    detailAndDimensions: detailAndDimensions,
    shippingsAndReturns: shippingsAndReturns,
    artistStory: {
        type: String,
        required: true,      
    }
})

module.exports = mongo.model("ArtData", artData)