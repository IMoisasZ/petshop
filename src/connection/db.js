/** @format */

import mysql from 'mysql2/promise'
import dotenv from 'dotenv'
dotenv.config()

const {
	HOST,
	USER,
	PASSWORD,
	DATABASE,
	WAITFORCONNECTIONS,
	CONNECTIONLIMIT,
	QUEUELIMIT,
} = process.env

export async function connect() {
	if (global.connection) {
		return global.connection.getConnection()
	}
	const pool = new mysql.createPool({
		host: HOST,
		user: USER,
		password: PASSWORD,
		database: DATABASE,
		waitForConnections: WAITFORCONNECTIONS,
		connectionLimit: CONNECTIONLIMIT,
		queueLimit: QUEUELIMIT,
	})
	global.connection = pool
	return pool.getConnection()
}

export async function testConnection() {
	const connection = await connect()
	try {
		console.log(`Conexão estabelecida com sucesso!`)
	} catch (error) {
		console.error('Erro ao conectar ou executar consulta:', error)
	} finally {
		connection.release()
	}
}
