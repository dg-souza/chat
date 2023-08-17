import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
    Content
} from './style'

const Input = props => {
    const {
        socket
    } = props

    const name = useSelector((state) => state.user.name)
    const id = useSelector((state) => state.user.id)
    const idRoom = useSelector((state) => state.user.idRoom)

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        const obj = {
            idRoom: idRoom,
            message: message,
            userInfo: { name: name, id: id }
        }

        socket.emit('newMessage', obj)
        setMessage('')
    }

    return(
        <Content>
            <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Text Here' />

            <button onClick={() => sendMessage()}>SEND</button>
        </Content>
    )
}

export default Input