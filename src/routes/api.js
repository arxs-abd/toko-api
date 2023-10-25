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
// ADMIN
router.get('/admin', adminController.getAll)
router.post('/admin', adminController.create)
router.get('/admin/:id', adminController.getAdminById)
router.put('/admin/:id', adminController.update)

// PRODUCT
router.post('/product', productController.create)
router.put('/product/:id', productController.update)
router.delete('/product/:id', productController.remove)

module.exports = router
