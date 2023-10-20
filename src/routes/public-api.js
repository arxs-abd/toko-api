const express = require('express')

const router = new express.Router()

const productController = require('../controller/product-controller')
const adminController = require('../controller/admin-controller')

router.get('/product', productController.getAll)
router.get('/admin', adminController.getAll)
router.post('/admin', adminController.createNewAdmin)
router.get('/admin/id', adminController.getAdminById)

module.exports = router
