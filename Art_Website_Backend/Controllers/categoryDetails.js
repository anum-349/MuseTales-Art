const CategoryDetails = require('../Models/CategoryDetails')

exports.createCategoryDetail = async (req, res) => {
    try {
        const { title } = req.body
        const existingData = await CategoryDetails.find({ title })
        if (existingData) {
            return res.status(409).send({ CategoryExist: "Category already exists." })
        }
        
        const data = new CategoryDetails(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "CategoryDetails Saved Successful.", data: saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCategoryDetail = async (req, res) => {
    try {
        const data = await CategoryDetails.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCategoryDetailByName = async (req, res) => {
    try {
        const data = await CategoryDetails.find(req.params.name);
        if (!data) {
            return res.status(404).send({ CategoryDetailError: "Enter valid category id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateCategoryDetail = async (req, res) => {
    try {
        const data = await CategoryDetails.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!data) {
            return res.status(404).send({ CategoryDetailsError: "CategoryDetails Not Found." })
        }
        return res.status(200).send({ message: "CategoryDetails Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteCategoryDetail = async (req, res) => {
    try {
        const data = await CategoryDetails.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ CategoryDetailsError: "CategoryDetails Not Found." })
        }
        return res.status(200).send({ message: "CategoryDetails Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};