const express = require('express')

const router = new express.Router()

const productController = require('../controller/product-controller')

router.get('/product', productController.getAll)

module.exports = router
