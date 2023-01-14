import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
const uri: string = process.env.MONGO_URI || 'mongodb+srv://username:pwd@learning.axocbcd.mongodb.net/test'
const connectDB = async () => {
  try {
   await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      } as ConnectOptions)
    console.log('Database connected')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

export default connectDB