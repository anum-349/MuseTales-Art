const Collections = require('../Models/Collections')

exports.createCollection = async (req, res) => {
    try {
        const { name } = req.body
        let existingData = await Collections.findOne({ name })
        if (existingData) {
            return res.status(409).send({ CollectionsError: "Collections Already Exists." })
        }

        const data = new Collections(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Collections Saved Successful.", data:saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCollection = async (req, res) => {
    try {
        const data = await Collections.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCollectionById =  async (req, res) => {
    try {
        const data = await Collections.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ CollectionError: "Enter valid collection id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateCollection =  async (req, res) => {
    try {
        const data = await Collections.findByIdAndUpdate(req.params._id, req.body, {new: true})
        if (!data) {
            return res.status(404).send({ CollectionsError: "Collections Not Found." })
        }
        return res.status(200).send({ message: "Collections Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteCollection =  async (req, res) => {
    try {
        const data = await Collections.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ CollectionsError: "Collections Not Found." })
        }
        return res.status(200).send({ message: "Collections Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};