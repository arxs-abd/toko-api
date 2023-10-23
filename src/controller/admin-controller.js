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

const getAdminById = (req, res, next) => {
	const id = adminService.getAdminById()
	return res.send({
		status: 'success',
		id,
	})
}

const createNewAdmin = (req, res, next) => {
	const newAdmin = adminService.createNewAdmin()
	return res.send({
		status: 'success',
		newAdmin,
	})
}

module.exports = { getAll, getAdminById, createNewAdmin }
