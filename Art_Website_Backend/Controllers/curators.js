const Curators = require('../Models/Curators')

exports.createCurator = async (req, res) => {
    try {
        const { title } = req.body
        let data = await Curators.findOne({ title })
        if (data) {
            return res.status(409).send({ CuratorsError: "Curators Already Exists." })
        }

        data = new Curators(req.body);
        data = await data.save();
        return res.status(201).send({ message: "Curators Saved Successful.", data });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCurator = async (req, res) => {
    try {
        const data = await Curators.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCuratorById =  async (req, res) => {
    try {
        const data = await Curators.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ CuratorError: "Enter valid curator id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateCurator =  async (req, res) => {
    try {
        const data = await Curators.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).send({ CuratorsError: "Curators Not Found." })
        }
        return res.status(200).send({ message: "Curators Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteCurator =  async (req, res) => {
    try {
        const data = await Curators.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ CuratorsError: "Curators Not Found." })
        }
        return res.status(200).send({ message: "Curators Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};