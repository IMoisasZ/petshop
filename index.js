import express from 'express';
import ProprietarioRouter from './routes/proprietario.route.js'
import AnimalRouter from './routes/animal.route.js'

const app = express();

app.use(express.json());

app.use('/proprietario', ProprietarioRouter)
app.use('/animal', AnimalRouter)

app.use((err, req, res, next) => {
    res.status(400).send({ erros: err.message })
})

app.listen(3000, () => console.log("API Started!"));