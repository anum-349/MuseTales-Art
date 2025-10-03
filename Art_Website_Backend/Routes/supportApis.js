const express = require('express');
const supportController = require('../Controllers/support');
const validation = require('../Middlewares/validation');
const { uploadAttachment } = require("../Controllers/support");
const multer = require("multer")

const router = express.Router();
router.use(express.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "d:/Artists Websites/Art_website_Frontend/public/uploads"); // save inside /public/uploads
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
    }
});
const upload = multer({ storage });

// Specify required fields for validation
router.post('/support', upload.array("attachment", 5), supportController.uploadAttachment);
router.get('/supports', supportController.getSupport);
router.get('/support/:_id', supportController.getSupportById);
router.put('/support/:_id', validation.validateRequiredFields(['email','subject']), supportController.updateSupport);
router.delete('/support/:_id', supportController.deleteSupport);

module.exports = router;
