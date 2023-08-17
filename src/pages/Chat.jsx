import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../reducer/user'

import {
    ChatContent
} from '../styles/GlobalStyle'

import Message from '../components/Message'
import Input from '../components/Input'

const Chat = props => {
    const {
        socket
    } = props

    const dispatch = useDispatch()
    const [messages, setMessages] = useState([])
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        socket.on('sendChat', (response, user) => {
            setMessages(response)

            setCurrentUser(user)

            console.log(user)

            dispatch(userActions.login({ name: user.name, id: user._id }))
        })
    }, [])

    socket.on('getAllMessages', (messages) => {
        setMessages(messages)
    })

    return (
        <ChatContent>
            <div className='chat-content'>
                {
                    messages.length > 0

                        ?

                        messages.map(item => {
                            return (
                                <Message messages={item} currentUser={currentUser} />
                            )
                        })

                        :

                        <>
                            <h1>Sexo</h1>
                        </>
                }
            </div>

            <div className='input-content'>
                <Input socket={socket} />
            </div>
        </ChatContent>
    )
}

export default Chat