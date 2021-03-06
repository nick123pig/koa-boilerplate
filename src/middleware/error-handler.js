import logger from '../lib/logger'

export default async function errorHandler(ctx, next) {
	try {
		await next()
	} catch (err) {
		ctx.status = err.statusCode || 500
		ctx.body = err.toJSON ? err.toJSON() : { message: err.message, ...err }
		logger.error('Error in request', err)
	}
}
