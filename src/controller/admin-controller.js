const service = require('../services/admin-service')

// AUTH
const login = async (req, res, next) => {
	try {
		const data = await service.login(req.body)

		// Set Cookie
		res.cookie('token', data.token)
		return res.send({
			status: 'success',
			data,
		})
	} catch (error) {
		next(error)
	}
}

const register = async (req, res, next) => {
	const data = await service.register(req.body)

	return res.send({
		status: 'success',
		data,
	})
}

// ADMIN

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

const getById = async (req, res, next) => {
	const { id } = req.params
	const data = await service.getById(id)
	return res.send({
		status: 'success',
		data,
	})
}

const update = async (req, res, next) => {
	const { id } = req.params
	const data = await service.update(req.body, id)

	return res.send({
		status: 'success',
		data,
	})
}

module.exports = { getAll, getById, create, login, register, update, getById }
