const Product = require('../models/products-model')

const { validate } = require('../validation/validation')
const validation = require('../validation/product-validation')
const { ResponseError } = require('../errors/response-error')

const getAll = async (params) => {
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
	await product.updateOne(data)

	// Get Updated Product
	const updatedProduct = await Product.findById(product_id)

	return updatedProduct
}

const remove = async (id) => {
	// Validate Request
	if (!id) throw new ResponseError(400, 'Id Tidak Ditemukan')

	// Find Product
	const product = await Product.findById(id)
	if (!product) throw new ResponseError(404, 'Produk Tidak Ditemukan')

	// Delete Product
	await product.deleteOne()

	return product
}

module.exports = {
	getAll,
	create,
	update,
	remove,
}
