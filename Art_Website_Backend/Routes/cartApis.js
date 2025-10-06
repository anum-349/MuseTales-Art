const express = require('express')
const cartController = require('../Controllers/cart')
const tokenVerification = require('../Middlewares/tokenVerification')

const router = express.Router()

router.use(express.json())

router.post('/cart', tokenVerification.verifyToken, cartController.createCart);
router.get('/carts', tokenVerification.verifyToken, cartController.getCart);
router.get('/cart/:_id', tokenVerification.verifyToken, cartController.getCartById);
router.put('/cart/:_id', tokenVerification.verifyToken, cartController.updateCart);
router.delete('/cart/:_id', tokenVerification.verifyToken, cartController.deleteCart);

module.exports = router
