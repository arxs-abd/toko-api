module.exports = {
	auth: {
		validUserPayload: {
			name: 'Admin',
			username: 'admin',
			role: 'SUPER_ADMIN',
			password: '12435678',
		},
		invalidUserPayload: {
			name: 'Admin',
			username: '',
			role: 'SUPER_ADMIN',
			password: '12435678',
		},
		invalidToken: '6d1caa70-595b-46bc-9818-ef152857cc88',
	},
}
