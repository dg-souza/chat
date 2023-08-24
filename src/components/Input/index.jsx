import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
    Content
} from './style'

import { getMessage } from '../../utils/Toast'

import { filter } from '../../utils/filter'

const Input = props => {
    const {
        socket
    } = props

    const name = useSelector((state) => state.user.name)
    const id = useSelector((state) => state.user.id)
    const idRoom = useSelector((state) => state.user.idRoom)

    const [message, setMessage] = useState('')

    const sendMessage = (e) => {
        e.preventDefault()

        if (message) {
            if (!filter(message)) {
                const obj = {
                    idRoom: idRoom,
                    message: message,
                    userInfo: { name: name, id: id }
                }

                socket.emit('newMessage', obj)

                setMessage('')
            } else getMessage('error', 'No Badwoords :C')
        } else getMessage('error', 'Type a message')
    }

    return (
        <Content>
            <form>
                <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder='Text Here' />

                <button onClick={(e) => sendMessage(e)}>SEND</button>
            </form>
        </Content>
    )
}

export default Input