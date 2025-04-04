import AnimalRepository from "../repositories/animal.repository.js"

async function createAnimal(animal){
    return await AnimalRepository.insertAnimal(animal)
}

async function updateAnimal(animal){
    return await AnimalRepository.updateAnimal(animal)
}

async function deleteAnimal(id){
    await AnimalRepository.deleteAnimal(id)
}

async function getAnimais(id){
    if(id){
        return await AnimalRepository.getAnimalByProprietario(id)    
    }
    return await AnimalRepository.getAnimais()
}

async function getAnimal(id){
    return await AnimalRepository.getAnimal(id)
}

export default {
    createAnimal,
    updateAnimal,
    deleteAnimal,
    getAnimais,
    getAnimal
}