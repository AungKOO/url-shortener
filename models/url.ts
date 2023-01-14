import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
  urlId: {
    type: String,
    required: true
  },
  origUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: String,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  }
})

export default mongoose.model('Url', urlSchema)