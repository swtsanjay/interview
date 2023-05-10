const config = {
	IsLocal: process.env.NODE_ENV === 'local',
	IsProd: process.env.NODE_ENV === 'prod',

	port: parseInt(process.env.PORT, 10) || 3000,
	dbConnectionUrl: process.env.DB_CONNECTION_URL,

	jwt: {
		expDuration: process.env.JWT_TIME,
		secretKey: process.env.JWT_SECREATE_kEY
	},

	crypto: {
		algorithm: 'aes-256-ctr',
		encryptionKey: Buffer.from('FoCKvdLslUuB2x3EZlKate7XGottHski1LmyqJHvUht=', 'base64'),
		ivLength: 16
	},

	TZ: process.env.TZ || 'Asia/Calcutta',
};

module.exports = config;