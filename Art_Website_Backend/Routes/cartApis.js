const express = require('express')
const cartController = require('../Controllers/cart')
const validation = require('../Middlewares/validation')

const router = express.Router()

router.use(express.json())

router.post('/cart', validation.validateBody, cartController.createCart);
router.get('/carts', cartController.getCart);
router.get('/cart/:_id', cartController.getCartById);
router.put('/cart/:_id', validation.validateRequiredFields(["name"]), cartController.updateCart);
router.delete('/cart/:_id', cartController.deleteCart);

module.exports = router
