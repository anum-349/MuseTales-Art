const express = require('express')
const testimonalController = require('../Controllers/testimonal')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/testimonal', validation.validateBody, testimonalController.createTestimonal);
router.get('/testimonals', testimonalController.getTestimonal);
router.get('/testimonal/:_id', testimonalController.getTestimonalById);
router.put('/testimonal/:_id', validation.validateRequiredFields(["title"]), testimonalController.updateTestimonal);
router.delete('/testimonal/:_id', testimonalController.deleteTestimonal);

module.exports = router
