// controllers/CartController.js
const Cart = require("../Models/Cart");

exports.createCart = async (req, res) => {
    try {
        const userId = req.user.id;
const { name, image, category, author, shipping, price, delivery } = req.body;

        if (!name || !image || !category || !author || !price) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        // ✅ Check if user already has a cart
        let cart = await Cart.findOne({ userId });

        if (cart) {
            // ✅ Add new item to existing cart
            cart.items.push({ name, image, category, author, shipping, price, delivery });
            await cart.save();
            return res.status(200).json({ message: "Item added to existing cart.", cart });
        } else {
            const newCart = new Cart({
                userId,
                items: [{ name, image, category, author, shipping, price, delivery }],
            });
            await newCart.save();
            return res.status(201).json({ message: "New cart created.", cart: newCart });
        }
    } catch (err) {
        console.error("Error adding to cart:", err);
        return res.status(500).json({ message: "Server error", error: err.message });
    }
};

exports.getCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await Cart.find({ userId });
        return res.status(200).send(data);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.getCartById = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await Cart.findOne({ _id: req.params._id, userId });

        if (!data) {
            return res.status(404).send({ CartError: "Cart not found for this user." });
        }

        return res.status(200).send(data);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.updateCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await Cart.findOneAndUpdate(
            { _id: req.params._id, userId },
            req.body,
            { new: true }
        );

        if (!data) {
            return res.status(404).send({ CartError: "Cart not found for this user." });
        }

        return res.status(200).send({ message: "Cart updated successfully.", data });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.deleteCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const data = await Cart.findOneAndDelete({ _id: req.params._id, userId });

        if (!data) {
            return res.status(404).send({ CartError: "Cart not found for this user." });
        }

        return res.status(200).send({ message: "Cart deleted successfully." });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};
