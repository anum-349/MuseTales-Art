const express = require('express')
const categoryDetailsController = require('../Controllers/categoryDetails')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/category', validation.validateBody, categoryDetailsController.createCategoryDetail);
router.get('/categories', categoryDetailsController.getCategoryDetail);
router.get('/category/:name', categoryDetailsController.getCategoryDetailByName);
router.put('/category/:_id', validation.validateRequiredFields(['author']), categoryDetailsController.updateCategoryDetail);
router.delete('/category/:_id', categoryDetailsController.deleteCategoryDetail);

module.exports = router
