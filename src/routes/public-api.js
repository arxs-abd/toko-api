const express = require('express')
const router = new express.Router()

// CONTROLLER
const adminController = require('../controller/admin-controller')
const productController = require('../controller/product-controller')

// ROUTER

// AUTH
router.post('/register', adminController.register)
router.post('/login', adminController.login)

// PRODUCT
router.get('/product', productController.getAll)

module.exports = router
