const express = require('express')
const router = new express.Router()

// CONTROLLER
const adminController = require('../controller/admin-controller')
const productController = require('../controller/product-controller')
const adminController = require('../controller/admin-controller')

router.post('/register', adminController.register)
router.post('/login', adminController.login)

router.get('/product', productController.getAll)
router.get('/admin', adminController.getAll)
router.post('/admin', adminController.createNewAdmin)
router.get('/admin/id', adminController.getAdminById)

module.exports = router
