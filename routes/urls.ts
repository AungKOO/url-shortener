import {Router} from 'express'
import { nanoid } from 'nanoid'
import Url from '../models/url'
import dotenv from 'dotenv'
dotenv.config({path: '../config/.env'})

const router = Router()
// short URL generator

router.post('/short', async(req, res) => {
    const {origUrl} = req.body
    const base = process.env.BASE
    const urlId = nanoid()
    try {
        let url = await Url.findOne({ origUrl })
        if (url) {
            res.json(url)
        } else {
            const shortUrl = `${base}/${urlId}`
            url = new Url(
                {origUrl,
                shortUrl,
                urlId,
                date: new Date(),
            })
            await url.save()
            res.json(url)
        }
    }catch(err) {
        console.log(err)
        res.status(500).json('Sever Erro')
    }
}
)
export default router;