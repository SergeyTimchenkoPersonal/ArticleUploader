import * as express from 'express'
import * as cors from 'cors'

const config = require('config')

// import routes from '../routes'

export default async ({ app }: { app: express.Application }) => {
	app.use(cors())
	app.use(express.json())
	// app.use(config.get('api').prefix, routes())

	return app
}
