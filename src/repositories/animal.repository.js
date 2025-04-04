/** @format */

import { connect } from '../connection/db.js'

async function insertAnimal(animal) {
	const conn = await connect()
	try {
		const { nome, tipo, proprietario_id } = animal
		const sql =
			'INSERT INTO animais (nome, tipo, proprietario_id) VALUES(?, ?, ?)'
		const values = [nome, tipo, proprietario_id]
		const [rows] = await conn.execute(sql, values)
		const id = rows.insertId
		return getAnimal(id)
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function updateAnimal(animal) {
	const conn = await connect()
	try {
		const { id, nome, tipo, proprietario_id } = animal
		const sql =
			'UPDATE animais SET nome = ?, tipo = ?, proprietario_id = ?, updated_at = ? WHERE id = ?'
		const updated_at = new Date()
		const values = [nome, tipo, proprietario_id, updated_at, id]
		await conn.query(sql, values)
		return getAnimal(id)
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function deleteAnimal(id) {
	const conn = await connect()
	try {
		const sql = 'DELETE FROM animais WHERE id = ?'
		return await conn.execute(sql, [id])
	} catch (err) {
		throw err
	}
}

async function getAnimais() {
	const conn = await connect()
	try {
		const sql =
			'SELECT animais.id, animais.nome, animais.tipo, proprietarios.nome as proprietario FROM animais INNER JOIN proprietarios ON animais.proprietario_id = proprietarios.id'
		const [rows] = await conn.query(sql)
		return rows
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function getAnimal(id) {
	const conn = await connect()
	try {
		const sql =
			'SELECT animais.id, animais.nome, animais.tipo, proprietarios.nome as proprietario FROM animais INNER JOIN proprietarios ON animais.proprietario_id = proprietarios.id WHERE animais.id = ?'
		const [rows] = await conn.execute(sql, [id])
		return rows
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

async function getAnimalByProprietario(id) {
	const conn = await connect()
	try {
		const sql = 'SELECT * FROM animais WHERE proprietario_id = ?'
		const [rows] = await conn.execute(sql, [id])
		return rows
	} catch (err) {
		throw err
	} finally {
		conn.release()
	}
}

export default {
	insertAnimal,
	updateAnimal,
	deleteAnimal,
	getAnimais,
	getAnimal,
	getAnimalByProprietario,
}
