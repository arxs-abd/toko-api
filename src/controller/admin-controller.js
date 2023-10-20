const adminService = require('../services/admin-service')

const getAll = (req, res, next) => {
	const data = adminService.getAll()
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
