const mongoose = require("mongoose");

const baseOptions = {
    discriminatorKey: "userType", 
    collection: "supports",
};

const SupportSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/,
        },
        subject: {
            type: String,
        },
        description: {
            type: String,
        },
        attachment: {
            type: [String],
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
    },
    baseOptions
);

const Support = mongoose.model("Support", SupportSchema)

const ArtistSupport = Support.discriminator(
    "I am an Artist",
    new mongoose.Schema({
        reason: {
            type: String,
            required: true,
            enum: [
                "Account / Profile Settings",
                "Uploading Artworks",
                "Sales & Payments",
                "Shipping & Delivery",
                "Technical Issues",
                "Other",
            ],
        },
        subReason: {
            type: String,
            required: true,
        },
        gallery: {
            type: String,
            required: true,
        },
        artId: {
            type: String,
        },
    })
);

const BuyerSupport = Support.discriminator(
    "I am a Buyer",
    new mongoose.Schema({
        reason: {
            type: String,
            required: true,
            enum: [
                "Orders",
                "Billing",
                "Delivery",
                "Returns & Refunds",
                "Account Help",
                "Other",
            ],
        },
        subReason: {
            type: String,
            required: true,
        },
        buyerCountry: {
            type: String
        },
        fullName: {
            type: String,
        },
        orderNumber: {
            type: String,
        },
    })
);

module.exports = {
    Support,
    ArtistSupport,
    BuyerSupport,
};

/*const buyerSubReasons = {
  Orders: ["Track my order", "Cancel my order", "Item damaged", "Wrong item received"],
  Billing: ["Wrong charge", "Invoice request", "Need payment method help"],
  // ...
};

if (!buyerSubReasons[req.body.reason]?.includes(req.body.subReason)) {
  return res.status(400).json({ error: "Invalid subReason for selected reason" });
}
*/