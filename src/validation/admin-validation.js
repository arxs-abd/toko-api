const Joi = require('joi')

const createAdmin = Joi.object({
	username: Joi.string().max(100).required(),
	name: Joi.string().max(100).required(),
	password: Joi.string().max(100).required(),
	role: Joi.valid('SUPER_ADMIN', 'ADMIN').required(),
})
const login = Joi.object({
	username: Joi.string().max(100).required(),
	password: Joi.string().max(100).required(),
})

module.exports = {
	createAdmin,
	login,
}
