import { Router, Request, Response } from 'express'

import { PlaylistMadeService } from '../../../services/video/playlists_made.service'
import { IPlaylistManage } from '../../../interfaces/IPlaylist'


const router = Router()

export const playlistMadeRouter = (app: Router) => {
    app.use('/', router)

    router.post('/video/playlist/create', async (req: Request, res: Response) => {
        try {
            const playlist = await PlaylistMadeService().createPlaylist(req.body as IPlaylistManage)
            
            if(playlist?.message) {
                return res.status(400).json({
                    message: playlist.message
                })
            }

            res.status(201).json({
                message: 'Playlist created'
            })
             
        } catch (err) {
            res.status(400).json({
                message: 'Something went wrong'
            })
        }
    })

    router.get('/video/playlist/trends', async (req: Request, res: Response) => {
        try {
            
            const playlist = await PlaylistMadeService().getTrends()

            return res.status(200).json(playlist)

        } catch (err) {
            res.status(400).json({
                message: 'Something went wrong'
            })
        }
    })

    router.get('/video/playlists/:skipVal', async (req: Request, res: Response) => {
        try {
            
            const playlist = await PlaylistMadeService().getPlaylists(parseInt(req.params.skipVal))

            if(playlist instanceof Error) return res.status(400).end()
           
            res.status(200).json(playlist)
            

        } catch (err) {
            res.status(400).json({
                message: 'Something went wrong'
            })
        }
    })
}



