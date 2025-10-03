const mongo = require("mongoose")

const stories = mongo.Schema({
    name: {
        type: String,
        required: true,      
    },
    images: {
        type: [String],
        required: true,      
    },
    detail: {
        type: String,
        required: true,      
    },
    description: {
        type: String,
        required: true,      
    },
    link: {
        type: String,
        required: true,      
    },
    linkName: {
        type: String,
        required: true,      
    },
    category: {
        type: String,
        required: true,    
        //collectorsFav, DesignInsp, Exhibition,emergingArtist, history ,livingwithart, losagles 
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongo.model("Stories", stories)