import winston from 'winston'

require('dotenv').config()

const logger = winston.createLogger({
	level: process.env.LOG_LEVEL || 'info',
	transports: [
		new winston.transports.Console({
			format: winston.format.simple()
		})
	]
})

export default logger
