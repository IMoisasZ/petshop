/** @format */

import { connect } from '../connection/db.js'
async function insertProprietario(proprietario) {
	let connection = await connect()
	const { nome, telefone } = proprietario
	try {
		const sql = 'INSERT INTO proprietarios (nome, telefone) VALUES (?, ?)'
		const values = [nome, telefone]

		const [result] = await connection.execute(sql, values)

		const id = result.insertId

		return await getProprietario(id)
	} catch (error) {
		console.error('Erro ao inserir proprietário:', error)
		throw error
	} finally {
		if (connection) {
			connection.release()
		}
	}
}

async function updateProprietario(proprietario) {
	const conn = await connect()
	try {
		const { nome, telefone, id } = proprietario
		const sql =
			'UPDATE proprietarios SET nome = ?, telefone = ?, updated_at = ? WHERE id = ?'
		const values = [nome, telefone, new Date(), id]
		await conn.execute(sql, values)
		return await getProprietario(id)
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function deleteProprietario(id) {
	const conn = await connect()
	try {
		const sql = 'DELETE FROM proprietarios WHERE id = ?'
		return await conn.execute(sql, [id])
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function getProprietarios() {
	const conn = await connect()
	try {
		const sql = 'SELECT * FROM proprietarios'
		const [rows] = await conn.execute(sql)
		return rows
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function getProprietario(id) {
	const conn = await connect()
	try {
		const sql = 'SELECT * FROM proprietarios WHERE id = ?'
		const [rows] = await conn.execute(sql, [id])
		return rows
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

export default {
	insertProprietario,
	updateProprietario,
	deleteProprietario,
	getProprietarios,
	getProprietario,
}
