import mongoose from 'mongoose'

const chatSchema = new mongoose.Schema(
    {
        id: { type: String },
        idRoom: { type: String },
        message: { type: String },
        userInfo: { type: Object }
    }
)

const chats = mongoose.model('chats', chatSchema)

export default chats