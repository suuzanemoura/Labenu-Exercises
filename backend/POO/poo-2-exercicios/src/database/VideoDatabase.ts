import { TVideosDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class VideoDatabase extends BaseDatabase {

    public static TABLE_VIDEOS = "videos"

    public async findVideos():Promise<TVideosDB[]>{
        const videosDB: TVideosDB[] = await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS)    
        return videosDB
    }

    public async findVideosById(id: string):Promise<TVideosDB | undefined>{
        const [videoDB]: TVideosDB[] | undefined[] = await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).where({id: id})

        return videoDB
    }

    public async createVideos(newVideo:TVideosDB):Promise<void>{
        await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).insert(newVideo)
    }

    public async editVideo(updateVideoDB: TVideosDB, id:string):Promise<void>{
        await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).update(updateVideoDB).where({id: id})
    }

    public async deleteVideo(id:string):Promise<void>{
        await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).del().where({id: id})
    }

}