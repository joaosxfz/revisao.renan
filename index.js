import express from 'express'
import database from './config/database.js'
import routerUser from './router/user.js'

const app = express()
app.use(express.json())

app.use('/api/v1/user', routerUser)



database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log("Servidor rodando na porta 3000")
        })
    })
    .catch((e) => {
        console.log(e)
    })