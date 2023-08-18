import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import {
    Content
} from './style'

import { filter } from '../../utils/filter'

const Input = props => {
    const {
        socket
    } = props

    const name = useSelector((state) => state.user.name)
    const id = useSelector((state) => state.user.id)
    const idRoom = useSelector((state) => state.user.idRoom)

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (message !== '') {
            if (!filter(message)) {
                const obj = {
                    idRoom: idRoom,
                    message: message,
                    userInfo: { name: name, id: id }
                }

                socket.emit('newMessage', obj)

                setMessage('')
            } else alert('Não digite mensagens de baixo calão >:C')
        } else alert('Digite uma mensagem')
    }

    useEffect(() => {
        document.addEventListener('keydown', keyPressed => { if (keyPressed.key === 'Enter') { sendMessage() } else return })
    }, [])

    return (
        <Content>
            <input onChange={(e) => setMessage(e.target.value)} value={message} type="text" placeholder='Text Here' />

            <button onClick={() => sendMessage()}>SEND</button>
        </Content>
    )
}

export default Input