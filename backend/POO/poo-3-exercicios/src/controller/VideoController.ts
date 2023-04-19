import { Request, Response } from "express"
import { VideoDatabase } from "../database/VideoDatabase"
import { Video } from "../models/Video"
import { VideosDB } from "../types"

export class VideoController {

    getAllVideos = async (req: Request, res: Response) => {
        try {
            
            const videosDatabase = new VideoDatabase()
            const videosDB = await videosDatabase.findVideos()
    
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
    }

    createVideo = async (req: Request, res: Response) => {
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
    
            const videosDatabase = new VideoDatabase()
            const videoDBExists: VideosDB | undefined = await videosDatabase.findVideosById(id)
    
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
    
            const newVideoDB: VideosDB ={
                id: newVideo._id,
                title: newVideo._title,
                duration: newVideo._duration,
                upload_at: newVideo._uploadAt
            }
    
            await videosDatabase.createVideos(newVideoDB)
            const videoDB: VideosDB | undefined = await videosDatabase.findVideosById(id)
    
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
    }

    editVideo = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const { title, duration } = req.body
    
            const videosDatabase = new VideoDatabase()
            const videoDB:VideosDB | undefined = await videosDatabase.findVideosById(id)
    
            if(!videoDB){
                res.status(400)
                throw new Error('O vídeo não existe.')
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
                
            const updateVideo = new Video(
                videoDB.id,
                videoDB.title,
                videoDB.duration,
                videoDB.upload_at
              );
          
              title && (updateVideo._title = title);
              duration && (updateVideo._duration = duration);
          
              const updateVideoDB: VideosDB = {
                id: updateVideo._id,
                title: updateVideo._title,
                duration: updateVideo._duration,
                upload_at: updateVideo._uploadAt,
              };
          
              await videosDatabase.editVideo(updateVideoDB, id);
            
            res.status(200).send({message: "Vídeo atualizado com sucesso!", updateVideoDB})
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
    }

    deleteVideo = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            
            const videosDatabase = new VideoDatabase()
            const videoDB: VideosDB | undefined = await videosDatabase.findVideosById(id)
        
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
    
            await videosDatabase.deleteVideo(id)
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
    }
}