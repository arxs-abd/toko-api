const express = require('express')
const cors = require('express')
const cookieParser = require('cookie-parser')

require('./database')

const { errorMiddleware } = require('../middleware/error-middleware')

// ROUTER
const publicApiRoute = require('../routes/public-api')
const api = require('../routes/api')

const web = express()
web.use(express.json())
web.use(cookieParser())
web.use(cors())

web.use('/api', publicApiRoute)
web.use('/api', api)
web.use(errorMiddleware)

module.exports = {
	web,
}
