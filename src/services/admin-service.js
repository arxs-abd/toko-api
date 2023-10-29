const bycrpt = require('bcryptjs')
const { v4: uuid } = require('uuid')

const { validate } = require('../validation/validation')
const validation = require('../validation/admin-validation')
const Admin = require('../models/admins-model')
const { ResponseError } = require('../errors/response-error')
const Product = require('../models/products-model')

const create = async (body) => {
	// Validate Request
	const data = validate(validation.createAdmin, body)

	// Hash Password
	const salt = bycrpt.genSaltSync(5)
	data.password = bycrpt.hashSync(data.password, salt)

	// Insert to Database
	const result = await Admin.create(data)
	return result
}

const login = async (body) => {
	// Validate Request
	const data = validate(validation.login, body)
	const { username, password } = data

	// Find Users By Username
	const admin = await Admin.findOne({ username })
	if (!admin) throw new ResponseError(404, 'Username Tidak Ditemukan')

	// Check Password
	const correctPassword = await bycrpt.compare(password, admin.password)
	if (!correctPassword) throw new ResponseError(403, 'Password Salah')

	// Create and Save Token
	const token = uuid().toString()
	admin.token = token
	await admin.save()

	return admin
}

const register = async (body) => {
	const admins = await Admin.find({})

	// Check Admin Has Existed
	if (admins.length > 0)
		throw new ResponseError(
			401,
			'Silahkan Hubungi Super Admin Untuk Penambahan Admin'
		)

	return await create(body)
}

const logout = async (body) => {}

const getAll = async () => {
	const admins = await Admin.find({ role: 'ADMIN' })

	return admins
}

const getById = async (id) => {
	// Validate Request
	if (!id) throw new ResponseError(400, 'ID Ditemukan')

	// Find Admin
	const admin = await Admin.findById(id)
	if (!admin) throw new ResponseError(404, 'Admin Tidak Ditemukan')

	return admin
}

const update = async (body, id) => {
	// Validate Request
	const data = validate(validation.updateAdmin, body)

	// Find Admin By ID
	const admin = await Admin.findById(id)
	if (!admin) throw new ResponseError(404, 'Admin Tidak Ditemukan')

	// Update
	await admin.updateOne(data)

	return admin
}

const remove = async (id) => {
	// Validate Request
	if (!id) throw new ResponseError(400, 'ID Ditemukan')

	// Find Admin
	const admin = await Admin.findById(id)
	if (!admin) throw new ResponseError(404, 'Admin Tidak Ditemukan')

	// Delete Admin
	await admin.deleteOne()

	return admin
}

const getProductByAdmin = async (id) => {
	const product = await Product.find({
		created_by: id,
	})

	return product
}

module.exports = {
	create,
	login,
	register,
	getAll,
	getById,
	update,
	remove,
	getProductByAdmin,
}
