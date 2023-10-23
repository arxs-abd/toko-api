const Mongoose = require('mongoose')

const PRODUCT_TYPE = ['AKSESORIS_HP', 'AKSESORIS_LAPTOP']

const schema = new Mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	product_type: {
		type: String,
		enum: PRODUCT_TYPE,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	url_product: {
		type: String,
		required: true,
	},
	admin_id: {
		type: String,
		required: true,
	},
	created_at: {
		type: Date,
		required: true,
	},
})

const product = Mongoose.model('products', schema)

module.exports = product
