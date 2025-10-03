const ArtDetails = require('../Models/ArtDetails')

exports.createArtDetail = async (req, res) => {
    try {
        const { artId } = req.body
        let existingData = await ArtDetails.findOne({ artId })
        if (existingData) {
            return res.status(409).send({ ArtDetailsError: "ArtDetails Already Exists." })
        }

        const data = new ArtDetails(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "ArtDetails Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getArtDetail = async (req, res) => {
    try {
        const data = await ArtDetails.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getArtDetailById =  async (req, res) => {
    try {
        const data = await ArtDetails.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ ArtDetailError: "Enter valid art id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateArtDetail =  async (req, res) => {
    try {
        const data = await ArtDetails.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).send({ ArtDetailsError: "ArtDetails Not Found." })
        }
        return res.status(200).send({ message: "ArtDetails Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteArtDetail =  async (req, res) => {
    try {
        const data = await ArtDetails.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ ArtDetailsError: "ArtDetails Not Found." })
        }
        return res.status(200).send({ message: "ArtDetails Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};