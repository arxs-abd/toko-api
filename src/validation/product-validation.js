const Joi = require('joi')

const create = Joi.object({
	name: Joi.string().max(100).required(),
	description: Joi.string().required(),
	product_type: Joi.valid('AKSESORIS_HP', 'AKSESORIS_LAPTOP').required(),
	price: Joi.number().required(),
	picture: Joi.string().required(),
	url_product: Joi.string().required(),
})
const update = Joi.object({
	name: Joi.string().max(100),
	description: Joi.string(),
	product_type: Joi.valid('AKSESORIS_HP', 'AKSESORIS_LAPTOP'),
	price: Joi.number(),
	picture: Joi.string(),
	url_product: Joi.string(),
})

module.exports = {
	create,
	update,
}
