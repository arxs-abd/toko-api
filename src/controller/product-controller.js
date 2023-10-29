const productService = require('../services/product-service')

const getAll = async (req, res, next) => {
	try {
		const data = await productService.getAll(req.params)
		return res.send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const create = async (req, res, next) => {
	try {
		const admin_id = req.user._id
		const data = await productService.create(req.body, admin_id)

		return res.send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const update = async (req, res, next) => {
	try {
		const admin_id = req.user._id.toString()
		const product_id = req.params.id

		const data = await productService.update(req.body, product_id, admin_id)

		return res.send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const remove = async (req, res, next) => {
	try {
		const { id } = req.params
		const data = await productService.remove(id)

		return res.send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

module.exports = { getAll, create, update, remove }
