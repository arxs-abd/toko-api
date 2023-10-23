const mongoose = require('mongoose')

const { Mongodb } = require('../utils/config')

mongoose.connect(Mongodb.url, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
