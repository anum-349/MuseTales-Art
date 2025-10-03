const express = require('express')
const collectionController = require('../Controllers/collections')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/collection', validation.validateBody, collectionController.createCollection);
router.get('/collections', collectionController.getCollection);
router.get('/collection/:_id', collectionController.getCollectionById);
router.put('/collection/:_id', validation.validateRequiredFields(['name']), collectionController.updateCollection);
router.delete('/collection/:_id', collectionController.deleteCollection);

module.exports = router
