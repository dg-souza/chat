import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import ChatService from './services/chatService.js'
import UserService from './services/userService.js'
import db from './config/db.js'

const app = express()

db.once('open', () => {
    console.log('Conectado ao banco com sucesso')
})

const server = http.createServer(app)
const io = new Server(server)

io.on('connection', (socket) => {
    console.log('usuario connectado')

    socket.on('login', async (obj) => {
        const response = await UserService.createUser(obj.name)

        socket.join(obj.idRoom)
        socket.emit('receiveLogin', response)
        io.to(obj.idRoom).emit('sendChat', await ChatService.findById(obj.idRoom))
    })
    
    socket.on('newMessage', async (obj) => {
        await ChatService.createOrUpdate(obj)

        io.to(obj.idRoom).emit('getAllMessages', await ChatService.findById(obj.idRoom))
    })
})

server.listen(process.env.SERVER_PORT || 3001, () => {
    console.log('Rodando na porta 3001')
})