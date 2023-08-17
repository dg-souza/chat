import mongoose from 'mongoose'
import 'dotenv/config.js'

mongoose.connect(process.env.DB_URL)

let db = mongoose.connection

export default db