const express = require('express')
const cors = require('express')

const { errorMiddleware } = require('../middleware/error-middleware')

// ROUTER
const publicApiRoute = require('../routes/public-api')

const web = express()
web.use(express.json())
web.use(cors())

web.use('/api', publicApiRoute)
// web.use('/api', api)
web.use(errorMiddleware)

module.exports = {
	web,
}
