const User = require('../Models/User');

exports.createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email, password });
        if (existingUser) {
            return res.status(409).send({ UserError: "User Already Exists." });
        }
        const user = new User(req.body);
        const savedUser = await user.save();
        return res.status(201).send({ message: "User Saved Successful.", user: savedUser });
    } catch (err) {
        return res.status(400).send({ ErrorMessage: err.message });
    }
};

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.getUserByEmailPassword = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });

        if (!email || !user) {
            return res.status(400).send({ EmailError: "Enter valid email." });
        }
        if (!password || !user) {
            return res.status(400).send({ PasswordError: "Enter valid password." });
        }
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email, password, _id: { $ne: req.params._id } });
        if (existingUser) {
            return res.status(409).send({ UserError: "User Already Exists." });
        }

        const user = await User.findByIdAndUpdate(req.params._id, req.body, { new: true });
        if (!user) return res.status(404).send({ UserError: "User Not Found." });

        return res.status(200).send({ message: "User Updated Successful.", user });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params._id);
        if (!user) return res.status(404).send({ UserError: "User Not Found." });

        return res.status(200).send({ message: "User Deleted Successful.", user });
    } catch (err) {
        return res.status(500).send({ ErrorMessage: err.message });
    }
};
