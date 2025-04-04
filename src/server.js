/** @format */

import { app } from './index.js'
import { testConnection } from './connection/db.js'
import dotenv from 'dotenv'
dotenv.config()

const { PORT, PORT_SECONDARY } = process.env

app.listen(PORT || PORT_SECONDARY, () =>
	console.log(`API STARTED AT PORT ${PORT || PORT_SECONDARY}`)
)
testConnection()
