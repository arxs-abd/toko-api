const request = require('supertest')
const mongoose = require('mongoose')

const { web: app } = require('../src/app/web')
const { auth } = require('./payload')
const Admin = require('../src/models/admins-model')

afterAll(async () => {
	await Admin.deleteMany({})
	await mongoose.disconnect()
})

describe('POST /api/register [Registration Testing]', () => {
	const url = '/api/register'
	it('Should Fail to Add New Super Admin Because Data Is Not Complete', async () => {
		const res = await request(app).post(url).send(auth.invalidUserPayload)
		expect(res.statusCode).toBe(400)
		expect(res.body.status).toBe('fail')
	})
	it('Should Add New Super Admin', async () => {
		const res = await request(app).post(url).send(auth.validUserPayload)
		expect(res.statusCode).toBe(201)
		expect(res.body.status).toBe('success')
	})
	it('Should Fail to Add New Super Admin Because There Is Already', async () => {
		const res = await request(app).post(url).send(auth.validUserPayload)
		expect(res.body.status).toBe('fail')
		expect(res.statusCode).toBe(401)
	})
})
