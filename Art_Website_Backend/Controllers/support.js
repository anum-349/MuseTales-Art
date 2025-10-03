const { Support, ArtistSupport, BuyerSupport } = require("../Models/Support");

exports.uploadAttachment = async (req, res) => {
    try {
        const { userType, email, subject, description, reason, subReason, gallery, artId, buyerCountry, fullName, orderNumber } = req.body;

        console.log(req.body)
        const attachment = req.files ? req.files.map(f => f.filename) : [];

        console.log("Uploaded files:", req.files);

        let supportDoc;
        if (userType === "I am an Artist") {
            supportDoc = await ArtistSupport.create({
                email,
                subject,
                description,
                reason,
                subReason,
                gallery,
                artId,
                attachment
            });
        } else if (userType === "I am a Buyer") {
            supportDoc = await BuyerSupport.create({
                email,
                subject,
                description,
                reason,
                subReason,
                buyerCountry,
                fullName,
                orderNumber,
                attachment
            });
        }
        res.json({ success: true, data: supportDoc });
    } catch (err) {
        console.error("Support form error:", err);
        res.status(500).json({ error: err.message });
    }
}

exports.createSupport = async (req, res) => {
    try {
        const { email, subject, description } = req.body
        const existingData = await Support.find({ email, subject, description })
        if (existingData) {
            return res.status(409).send({ SupportExist: "Support already exists." })
        }

        const data = new Support(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Support Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.getSupport = async (req, res) => {
    try {
        const data = await Support.find();
        return res.status(200).send(data);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.getSupportById = async (req, res) => {
    try {
        const data = await Support.findById(req.params._id);
        if (!data) return res.status(404).send({ SupportError: "Enter valid support id." });
        return res.status(200).send(data);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.updateSupport = async (req, res) => {
    try {
        const data = await Support.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!data) return res.status(404).send({ SupportError: "Support Not Found." });
        return res.status(200).send({ message: "Support Updated Successful.", data });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.deleteSupport = async (req, res) => {
    try {
        const data = await Support.findByIdAndDelete(req.params._id);
        if (!data) return res.status(404).send({ SupportError: "Support Not Found." });
        return res.status(200).send({ message: "Support Deleted Successful.", data });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};
