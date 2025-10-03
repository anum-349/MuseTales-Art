const express = require('express')
const feedbackController = require('../Controllers/feedback')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/feedback', validation.validateBody, feedbackController.createFeedback);
router.get('/feedbacks', feedbackController.getFeedback);
router.get('/feedback/:_id', feedbackController.getFeedbackById);
router.put('/feedback/:_id', validation.validateRequiredFields(['name']), feedbackController.updateFeedback);
router.delete('/feedback/:_id', feedbackController.deleteFeedback);

module.exports = router
