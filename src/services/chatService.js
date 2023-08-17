import chats from "../models/chat.js";

class ChatService {
    static findAll = async () => {
        try {
            const response = await chats.find()

            return response
        } catch (err) {
            throw new Error('Erro: '+ err.message)
        }
    }

    static findById = async (idRoom) => {
        try {
            const response = await chats.find({ idRoom })

            return response
        } catch(err) {
            throw new Error('Erro: '+ err.message)
        }
    }

    static createOrUpdate = async (obj) => {
        try {
            await chats.create(obj)
        } catch(err) {
            throw new Error('Erro: '+ err.message)
        }
    }
}

export default ChatService