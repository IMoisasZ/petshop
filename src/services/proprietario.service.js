import ProprietarioRepository from "../repositories/proprietario.repository.js"
import AnimalRepository from "../repositories/animal.repository.js"

async function createProprietario(proprietario){
    return await ProprietarioRepository.insertProprietario(proprietario)
}

async function updateProprietario(proprietario){
    return await ProprietarioRepository.updateProprietario(proprietario)
}

async function deleteProprietario(id){
    try {
        let prop = await AnimalRepository.getAnimalByProprietario(id)

        if(prop.length){
            throw new Error("Existem animais relacionados ao proprietario. Não será possivel excluir!")
        }
        await ProprietarioRepository.deleteProprietario(id)  
    } catch (err) {
        throw err
    }
}

async function getProprietarios(){
    return await ProprietarioRepository.getProprietarios()
}

async function getProprietario(id){
    return await ProprietarioRepository.getProprietario(id)
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}