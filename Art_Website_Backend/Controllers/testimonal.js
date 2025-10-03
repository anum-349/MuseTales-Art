const Testimonal = require('../Models/Testimonals')

exports.createTestimonal = async (req, res) => {
    try {
        const { title } = req.body
        let existingData = await Testimonal.findOne({ title })
        if (existingData) {
            return res.status(409).send({ TestimonalError: "Testimonal Already Exists." })
        }

        const data = new Testimonal(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Testimonal Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getTestimonal = async (req, res) => {
    try {
        const data = await Testimonal.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getTestimonalById =  async (req, res) => {
    try {
        const data = await Testimonal.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ TestimonalError: "Enter valid testimonal id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateTestimonal =  async (req, res) => {
    try {
        data = await Testimonal.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).send({ TestimonalError: "Testimonal Not Found." })
        }
        return res.status(200).send({ message: "Testimonal Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteTestimonal =  async (req, res) => {
    try {
        const data = await Testimonal.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ TestimonalError: "Testimonal Not Found." })
        }
        return res.status(200).send({ message: "Testimonal Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};