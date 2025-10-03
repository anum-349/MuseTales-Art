const Feedback = require('../Models/Feedback')

exports.createFeedback = async (req, res) => {
    try {
        const {name, comment, detail} = req.body
        let existingData = await Feedback.findOne({name, comment, detail});
        if (existingData) {
            return res.status(409).send({ FeedbackError: "Feedback Already Exists.", existingData })
        }
        
        const data = new Feedback(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Feedback Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getFeedback = async (req, res) => {
    try {
        const data = await Feedback.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getFeedbackById = async (req, res) => {
    try {
        const data = await Feedback.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ FeedbackError: "Enter valid feedback id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateFeedback = async (req, res) => {
    try {
        const data = await Feedback.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!data) {
            return res.status(404).send({ FeedbackError: "Feedback Not Found." })
        }
        return res.status(200).send({ message: "Feedback Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteFeedback = async (req, res) => {
    try {
        const data = await Feedback.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ FeedbackError: "Feedback Not Found." })
        }
        return res.status(200).send({ message: "Feedback Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};