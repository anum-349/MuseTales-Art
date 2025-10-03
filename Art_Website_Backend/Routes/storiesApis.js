const express = require('express')
const storiesController = require('../Controllers/stories')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/story', validation.validateBody, storiesController.createStory);
router.get('/stories', storiesController.getStories);
router.get('/story/:_id', storiesController.getStoryById);
router.put('/story/:_id', validation.validateRequiredFields(["name"]), storiesController.updateStory);
router.delete('/story/:_id', storiesController.deleteStory);

module.exports = router
