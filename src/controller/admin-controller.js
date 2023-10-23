const service = require('../services/admin-service')

const create = async (req, res, next) => {
	try {
		const data = await service.create(req.body)

		return res.status(201).send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const getAll = async (req, res, next) => {
	const data = await service.getAll()
	return res.send({
		status: 'success',
		data,
	})
}

const login = async (req, res, next) => {
	try {
		const data = await service.login(req.body)

		// Set Token In The Cookies
		res.cookie('token', data.token)

		return res.status(200).send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const register = async (req, res, next) => {
	try {
		const data = await service.register(req.body)

		return res.status(201).send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const logout = async (req, res, next) => {}

module.exports = {
	create,
	getAll,
	login,
	register,
}
