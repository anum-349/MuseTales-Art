const Cart = require('../Models/Cart')

exports.createCart = async (req, res) => {
    try {
        const { name } = req.body
        const existingData = await Cart.find({ name })
        if (existingData) {
            return res.status(409).send({ CartExist: "Cart already exists." })
        }
        const data = new Cart(req.body);
        const saved = await data.save();
        return res.status(201).send({ message: "Cart Saved Successful.", saved });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCart = async (req, res) => {
    try {
        const data = await Cart.find();
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.getCartById = async (req, res) => {
    try {
        const data = await Cart.findById(req.params._id);
        if (!data) {
            return res.status(404).send({ CartError: "Enter valid cart id." })
        }
        return res.status(200).send(data)
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.updateCart = async (req, res) => {
    try {
        const data = await Cart.findByIdAndUpdate(req.params._id, req.body, { new: true })
        if (!data) {
            return res.status(404).send({ CartError: "Cart Not Found." })
        }
        return res.status(200).send({ message: "Cart Updated Successful.", data })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const data = await Cart.findByIdAndDelete(req.params._id)
        if (!data) {
            return res.status(404).send({ CartError: "Cart Not Found." })
        }
        return res.status(200).send({ message: "Cart Deleted Successful." })
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message })
    }
};