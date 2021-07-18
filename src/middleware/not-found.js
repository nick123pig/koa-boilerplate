export default async function notFoundHandler(ctx) {
	const msg = `${ctx.request.method} ${ctx.request.path}`
	ctx.notFound({
		message: `No endpoint matched your request: ${msg}`
	})
}
