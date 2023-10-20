const productService = require('../services/product-service')

const getAll = (req, res, next) => {
	const data = productService.getAll()
	return res.send({
		status: 'success',
		data,
	})
}

module.exports = { getAll }
