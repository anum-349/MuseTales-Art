exports.validateBody = (req, res, next) => {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).send({ error: "Request body cannot be empty." });
    }

    for (const [key, value] of Object.entries(body)) {
        if (value === undefined || value === null || value.toString().trim() === "") {
            return res.status(400).send({ error: `${key} is required and cannot be empty.` });
        }
    }

    next();
};

exports.validateRequiredFields = (requiredFields) => (req, res, next) => {
    for (const field of requiredFields) {
        if (!req.body[field] || req.body[field].toString().trim() === "") {
            return res.status(400).send({ error: `${field} is required.` });
        }
    }
    next();
};


exports.validateUser = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || typeof email !== "string") {
        return res.status(400).send({ EmailError: "Email is required and must be a string." });
    }

    if (!password || typeof password !== "string") {
        return res.status(400).send({ PasswordError: "Password is required and must be a string." });
    }

    next();
};
