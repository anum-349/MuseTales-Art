const express = require('express')
const curatorController = require('../Controllers/curators')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/curator', validation.validateBody, curatorController.createCurator);
router.get('/curators', curatorController.getCurator);
router.get('/curator/:_id', curatorController.getCuratorById);
router.put('/curator/:_id', validation.validateRequiredFields(['title']), curatorController.updateCurator);
router.delete('/curator/:_id', curatorController.deleteCurator);

module.exports = router
