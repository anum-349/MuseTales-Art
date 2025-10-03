const AuthorDetails = require('../Models/AuthorDetails')

exports.createAuthorDetail = async (req, res) => {
    try {
        const { name } = req.body
        const existingData = await AuthorDetails.find({ name })
        if (existingData) {
            return res.status(409).send({ AuthorExist: "Author already exists." })
        }
        const data = new AuthorDetails(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "AuthorDetails Saved Successful.", saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getAuthorDetail = async (req, res) => {
    try {
        const data = await AuthorDetails.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getAuthorDetailById = async (req, res) => {
    try {
        const data = await AuthorDetails.findOne({name: req.params.name});
        if (!data) return res.status(404).send({ AuthorDetailError: "Enter valid author id." })
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateAuthorDetail = async (req, res) => {
    try {
        const data = await AuthorDetails.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!data) return res.status(404).send({ AuthorDetailsError: "AuthorDetails Not Found." })
        return res.status(200).send({ message: "AuthorDetails Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteAuthorDetail = async (req, res) => {
    try {
        const data = await AuthorDetails.findByIdAndDelete(req.params._id)
        if (!data) return res.status(404).send({ AuthorDetailsError: "AuthorDetails Not Found." })
        return res.status(200).send({ message: "AuthorDetails Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};