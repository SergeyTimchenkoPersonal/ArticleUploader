import * as mongoose from 'mongoose'
import { Db } from 'mongodb'
const config = require('config')

export default async (): Promise<Db> => {
	try {
		const connection = await mongoose.connect(config.get('mongoUri'), {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
		})
		return connection.connection.db
	} catch (e) {
		console.log('Database connection error')
	}
}
