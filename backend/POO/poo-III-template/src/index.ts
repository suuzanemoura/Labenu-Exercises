import express, { Request, Response } from 'express'
import cors from 'cors'
import { AccountDB } from './types'
import { Account } from './models/Account'
import { AccountDatabase } from './database/AccountDatabase'
import { UserController } from './controller/UserController'
import { AccountController } from './controller/AccountController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor rodando na porta ${3003}`)
})

app.get("/ping", async (req: Request, res: Response) => {
    try {
        res.status(200).send({ message: "Pong!" })
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

const userController = new UserController()

app.get("/users", userController.getUsers)

app.post("/users", userController.createUser)

const  accountController = new AccountController()

app.get("/accounts", accountController.getAllAccounts)

app.get("/accounts/:id/balance", accountController.getBalanceByAccountId)


app.post("/accounts", accountController.createAccount)

app.put("/accounts/:id/balance", accountController.editAccount)