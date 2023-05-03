import express from 'express'
import cors from 'cors'
import { productRouter } from './router/productRouter'
import { userRouter } from './router/userRouter'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())

app.listen(Number(process.env.PORT) || 3003, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`)
})

app.use("/users", userRouter)
app.use("/products", productRouter)
