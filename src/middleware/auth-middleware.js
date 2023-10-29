const Admin = require('../models/admins-model')

const authenticate = async (req, res, next) => {
	// Get Token
	const token = req.get('Authorization').split(' ')[1] || req.cookies.token

	// Check Token Is Existed
	if (!token)
		return res.status(401).send({
			status: 'fail',
			msg: 'Token Tidak Ditemukan',
		})

	// Find Token and Check In Database
	const user = await Admin.findOne({
		token,
	})
	if (!user) {
		return res.status(401).send({
			status: 'fail',
			msg: 'Token Yang Digunakan Tidak Valid',
		})
	}

	// Set User in Request
	req.user = user
	next()
}

module.exports = {
	authenticate,
}
