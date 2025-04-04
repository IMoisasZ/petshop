/** @format */

import AnimalService from '../services/animal.service.js'

async function createAnimal(req, res, next) {
	try {
		let animal = req.body
		if (!animal.nome || !animal.tipo || !animal.proprietario_id) {
			throw new Error('O Nome, TIpo e Proprietario ID são obrigatórios!')
		}
		return res.send((animal = await AnimalService.createAnimal(animal)))
	} catch (err) {
		next(err)
	}
}

async function updateAnimal(req, res, next) {
	try {
		let animal = req.body
		if (!animal.id || !animal.nome || !animal.tipo || !animal.proprietario_id) {
			throw new Error(
				'Animal ID, Nome, Tipo e Proprietario ID são obrigatórios!'
			)
		}
		return res.send((animal = await AnimalService.updateAnimal(animal)))
	} catch (err) {
		next(err)
	}
}

async function deleteAnimal(req, res, next) {
	try {
		await AnimalService.deleteAnimal(req.params.id)
		return res.status(200).send({ status: 'Registro excluido com sucesso!' })
	} catch (err) {
		next(err)
	}
}

async function getAnimais(req, res, next) {
	try {
		return res.send(await AnimalService.getAnimais(req.query.proprietario_id))
	} catch (err) {
		next(err)
	}
}

async function getAnimal(req, res, next) {
	try {
		if (!req.params.id) {
			throw new Error('ID não encontrada!')
		}
		return res.send(await AnimalService.getAnimal(req.params.id))
	} catch (err) {
		next(err)
	}
}

export default {
	createAnimal,
	updateAnimal,
	deleteAnimal,
	getAnimais,
	getAnimal,
}
