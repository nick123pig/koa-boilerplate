import Koa from 'koa'
import cors from '@koa/cors'
import respond from 'koa-respond'
import bodyParser from 'koa-bodyparser'
import compress from 'koa-compress'
import routes from './routes'
import logger from './lib/logger'
import notFoundHandler from './middleware/not-found'
import errorHandler from './middleware/error-handler'

const app = new Koa()
app
	.use(errorHandler)
	.use(compress())
	.use(respond())
	.use(cors())
	.use(routes.routes())
	.use(routes.allowedMethods())
	.use(bodyParser())
	.use(notFoundHandler)

logger.info(`Koa Listening on ${process.env.PORT}`)
app.listen(process.env.PORT)
