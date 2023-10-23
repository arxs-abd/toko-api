const express = require('express')

const router = new express.Router()

// CONTROLLER
const adminController = require('../controller/admin-controller')
const productController = require('../controller/product-controller')

// MIDDLEWARE
const { authenticate } = require('../middleware/auth-middleware')

// MIDDLEWARE
router.use(authenticate)

// ROUTER
router.get('/admin', adminController.getAll)

router.post('/product', productController.create)
router.put('/product/:id', productController.update)

module.exports = router
