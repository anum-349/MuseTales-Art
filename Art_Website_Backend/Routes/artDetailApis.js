const express = require('express')
const ArtDetails = require('../Models/ArtDetails')
const artDetailController = require('../Controllers/artDetail')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/art-detail', validation.validateBody, artDetailController.createArtDetail);
router.get('/art-details', artDetailController.getArtDetail);
router.get('/art-detail/:_id', artDetailController.getArtDetailById);
router.put('/art-detail/:_id', validation.validateRequiredFields(['artId']), artDetailController.updateArtDetail);
router.delete('/art-detail/:_id', artDetailController.deleteArtDetail);

module.exports = router
