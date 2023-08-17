import UserService from "../services/userService.js"
import ChatService from "../services/chatService.js"

const UserSocket = (socket, io) => {
    socket.on('login', async (obj) => {
        const response = await UserService.createUser(obj.name)

        socket.join(obj.idRoom)
        socket.to(obj.idRoom).emit('sendChat', await ChatService.findAll(), response)
    })
}

export default UserSocket