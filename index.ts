import express from 'express'
import bodyParser from 'body-parser'
import connectDB from './config/db'
import urlsRouter from './routes/urls'
const app = express()
app.use(bodyParser.json())

connectDB;
app.use('/api', urlsRouter)
export default app
