import Router from '@koa/router'

const router = new Router()

export default router
	.get('/', ctx => {
		ctx.body = { hello: 'world' }
	})
	.get('/foo', ctx => {
		ctx.body = { foo: 'bar' }
	})
