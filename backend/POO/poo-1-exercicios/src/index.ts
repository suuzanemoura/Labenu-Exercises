import express, { Request, Response } from 'express'
import cors from 'cors'
import { db } from './database/knex'
import { TVideosDB } from './types'
import { Video } from './models/Video'

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

app.get("/videos", async (req: Request, res: Response) => {
    try {
        
        const videosDB: TVideosDB[] = await db("videos")

        const videos: Video[] = videosDB.map((videoDB) => new Video(
            videoDB.id,
            videoDB.title,
            videoDB.duration,
            videoDB.upload_at
        ))

        res.status(200).send(videos)

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

app.post("/videos", async (req: Request, res: Response) => {
    try {
        
        const { id, title, duration } = req.body

        if (typeof id !== "string") {
            res.status(400)
            throw new Error("'id' deve ser string")
        }

        if (typeof title !== "string") {
            res.status(400)
            throw new Error("'title' deve ser string")
        }

        if (typeof duration !== "number") {
            res.status(400)
            throw new Error("'duration' deve ser number")
        }

        const [ videoDBExists ]: TVideosDB[] | undefined[] = await db("videos").where({ id: id })

        if (videoDBExists) {
            res.status(400)
            throw new Error("'id' já existe")
        }

        const newVideo = new Video(
            id,
            title,
            duration,
            new Date().toISOString()
        )

        const newVideoDB: TVideosDB ={

            id: newVideo.getId(),
            title: newVideo.getTitle(),
            duration: newVideo.getDuration(),
            upload_at: newVideo.getUploadAt()
        }

        await db("videos").insert(newVideoDB)
        const [ videoDB ]: TVideosDB[] = await db("videos").where({ id: id })

        res.status(201).send({ message: "Vídeo criado com sucesso!", videoDB})

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

app.put("/videos/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const { updatedId, title, duration } = req.body

        const newId = updatedId as string | undefined
        const newTitle = title as string | undefined
        const newDuration = duration as number | undefined
    
        const [videoDB]:TVideosDB[] = await db("videos").where({id: id})

        if(!videoDB){
            res.status(400)
            throw new Error('O vídeo não existe.')
        }

        if (updatedId !== undefined) {
            if (typeof updatedId !== 'string'){
                res.status(400)
                throw new Error("'id' deve ser string")
            }
        }

        if (title !== undefined) {
            if (typeof title !== 'string'){
                res.status(400)
                throw new Error("'title' deve ser string")
            }
        }

        if (duration !== undefined) {
            if (typeof duration !== 'number'){
                res.status(400)
                throw new Error("'duration' deve ser number")
            }
        }
            
        const updatedVideo = new Video(
            newId || videoDB.id,
            newTitle || videoDB.title,
            newDuration|| videoDB.duration,
            videoDB.upload_at
        )

        const updatedVideoDB: TVideosDB ={
            id: updatedVideo.getId(),
            title: updatedVideo.getTitle(),
            duration: updatedVideo.getDuration(),
            upload_at: updatedVideo.getUploadAt()
        }
        
        await db("videos").update(updatedVideoDB).where({ id: id })
        
        res.status(200).send({message: "Vídeo atualizado com sucesso!", updatedVideoDB})
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

app.delete("/videos/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const [videoDB]:TVideosDB[] = await db("videos").where({id:id})
    
        if (!videoDB){
            res.status(400)
            throw new Error('O vídeo não existe.')
        }

        const video = new Video(
            videoDB.id,
            videoDB.title,
            videoDB.duration,
            videoDB.upload_at
        )

        
        await db("videos").del().where({id:id})
        res.status(200).send({message:"Vídeo excluído com sucesso!", video})
            
        } catch (error:any) {
            if(res.statusCode === 200){
                res.status(500)
            }
            if (error instanceof Error) {
                res.send(error.message);
            } else {
                res.send("Erro inesperado.");
            }
            console.log(error)
        }
})