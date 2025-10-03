const express = require('express')
const authorDetailController = require('../Controllers/authorDetail')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/author', validation.validateBody, authorDetailController.createAuthorDetail);
router.get('/authors', authorDetailController.getAuthorDetail);
router.get('/author/:name', authorDetailController.getAuthorDetailById);// search ny name
router.put('/author/:_id', validation.validateRequiredFields(['name']), authorDetailController.updateAuthorDetail);
router.delete('/author/:_id', authorDetailController.deleteAuthorDetail);

module.exports = router
