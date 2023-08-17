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

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        const obj = {
            message: message,
            userInfo: { name: name, id: id }
        }

        console.log(obj)

        socket.emit('newMessage', obj)
    }

    return(
        <Content>
            <input onChange={(e) => setMessage(e.target.value)} type="text" placeholder='Text Here' />

            <button onClick={() => sendMessage()}>SEND</button>
        </Content>
    )
}

export default Input