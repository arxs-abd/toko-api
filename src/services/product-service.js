const Product = require('../models/products-model')

const { validate } = require('../validation/validation')
const validation = require('../validation/product-validation')
const { ResponseError } = require('../errors/response-error')

const getAll = async () => {
	const products = await Product.find({})

	return products
}

const create = async (body, admin_id) => {
	// Validate Request
	const data = validate(validation.create, body)

	// Completed Field
	data.created_at = new Date()
	data.admin_id = admin_id

	// Insert To Database
	const product = await Product.create(data)
	return product
}

const update = async (body, product_id, admin_id) => {
	// Validate Request
	const data = validate(validation.update, body)

	// Find Product By ID And Check Existed
	const product = await Product.findById(product_id)
	if (!product) throw new ResponseError(404, 'Product Tidak Ditemukan')

	// Check Created By Admin ID
	if (product.admin_id !== admin_id)
		throw new ResponseError(401, 'Bukan Anda Yang Menambahkan Product Ini')

	// Update Product
	await product.updateOne(body)

	// Get Updated Product
	const updatedProduct = await Product.findById(product_id)

	return updatedProduct
}

module.exports = {
	getAll,
	create,
	update,
}
