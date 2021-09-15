import ProprietarioService from '../services/proprietario.service.js'

async function createProprietario(req, res, next){
    try{
        let proprietario = req.body;
        if(!proprietario.nome || !proprietario.telefone){
            throw new Error("O nome e o telefone são obrigatórios!")
        }
        proprietario = await ProprietarioService.createProprietario(proprietario);
        res.send(proprietario);
    }catch(err){
        next(err)
    }
}

async function updateProprietario(req, res, next){
    try{
        let proprietario = req.body;
        if(!proprietario.proprietario_id || !proprietario.nome || !proprietario.telefone){
            throw new Error("Proprietério ID, Nome e Telefone são obrigatórios!")
        }
        proprietario = await ProprietarioService.updateProprietario(proprietario)
        res.send(proprietario)
    }catch(err){
        next(err)
    }
}

async function deleteProprietario(req, res, next){
    try {
        await ProprietarioService.deleteProprietario(req.params.id)
        res.status(200).send({status:"Registro excluido com sucesso!"})
    } catch (err) {
        next(err)
    }
}

async function getProprietarios(req, res, next){
    try{
        res.send(await ProprietarioService.getProprietarios())
    }catch(err){
        next(err)
    }
}

async function getProprietario(req, res, next){
    try {
        if(!req.params.id){
            throw new Error("ID não encontrada!")
        }
        res.send(await ProprietarioService.getProprietario(req.params.id))
    } catch (err) {
        next(err)
    }
}

export default {
    createProprietario,
    updateProprietario,
    deleteProprietario,
    getProprietarios,
    getProprietario
}