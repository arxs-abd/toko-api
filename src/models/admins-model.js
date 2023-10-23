const Mongoose = require('mongoose')

const ROLE = ['SUPER_ADMIN', 'ADMIN']

const schema = new Mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
	},
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	role: {
		type: String,
		enum: ROLE,
		required: true,
	},
	token: {
		type: String,
		required: false,
	},
})

const admin = Mongoose.model('admins', schema)

module.exports = admin
