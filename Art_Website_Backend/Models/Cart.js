const mongo = require("mongoose")

const cart = mongo.Schema({
    userId: {
        type: String,
        required: true,
    },
    items: [
        {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            category: {
                type: String,
                required: true,
            },
            author: {
                type: String,
                required: true,
            },
            shipping: {
                type: String,
                default: "Included"
            },
            delivery: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            created_at: {
                type: Date,
                default: Date.now
            }
        }
    ]
})

module.exports = mongo.model("Cart", cart)