require('dotenv').config()

module.exports = {
	Mongodb: {
		url: process.env.MONGO_DATABASE_URL,
	},
}
