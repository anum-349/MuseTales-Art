const express = require('express')
const userController = require('../Controllers/user')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/user', validation.validateUser, userController.createUser);
router.get('/users', userController.getUsers);
router.get('/user', userController.getUserByEmailPassword);
router.put('/user/:_id', validation.validateRequiredFields(['email']), userController.updateUser);
router.delete('/user/:_id', userController.deleteUser);

module.exports = router
