const mongoose = require("mongoose");

const InquirySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    budget: { type: String, required: true },
    detail: { type: String }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inquiry", InquirySchema);
