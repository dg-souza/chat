import cors from 'cors'
import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import ChatService from './services/chatService.js'
import UserService from './services/userService.js'
import db from './config/db.js'
import 'dotenv/config.js'

const app = express()

db.once('open', () => {
    console.log('Conectado ao banco com sucesso')
})

const server = http.createServer(app)
const io = new Server(server, { cors: { origin: ['https://citrag.netlify.app', 'http://localhost:3000'], } })

io.on('connection', (socket) => {
    console.log('usuario connectado')

    socket.on('initialRequest', async () => {
        const result = await ChatService.findAllDistinct()

        socket.emit('response', result)
    })

    socket.on('loginGoogle', async (obj) => {
        const response = await UserService.createUser(obj)

        socket.emit('receiveLogin', response)
    })

    socket.on('login', async (idRoom) => {
        socket.join(idRoom)
        io.to(idRoom).emit('sendChat', await ChatService.findById(idRoom))
    })

    socket.on('newMessage', async (obj) => {
        await ChatService.createOrUpdate(obj)

        io.to(obj.idRoom).emit('getAllMessages', await ChatService.findById(obj.idRoom))
    })
})

server.listen(process.env.PORT || 3001, () => {
    console.log('Rodando na porta 3001')
})