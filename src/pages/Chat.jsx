import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
    ChatContent
} from '../styles/GlobalStyle'

import Message from '../components/Message'
import Input from '../components/Input'
import BtnLogout from '../components/BtnLogout'

const Chat = props => {
    const {
        socket
    } = props

    const navigate = useNavigate()

    const [messages, setMessages] = useState([])
    const [currentUser, setCurrentUser] = useState({})
    const user = useSelector((state) => state.user)

    useEffect(() => {
        verifyLogin()

        setCurrentUser(user)
    }, [])

    const verifyLogin = () => {
        if(!user.email) navigate('/')
    }

    socket.on('sendChat', (response) => {
        setMessages(response)
    })

    socket.on('getAllMessages', (messages) => {
        setMessages(messages)
    })

    return (
        <ChatContent>
            <div className='chat-content'>
                {
                    messages !== null

                        ?

                        Array.isArray(messages)

                            ?

                            messages.map((item, index) => {
                                return (
                                    <Message messages={item} key={index} currentUser={currentUser} />
                                )
                            })

                            :

                            <>
                                <h1>nothing</h1>
                            </>

                        :

                        <>
                            <h1>Nothing</h1>
                        </>
                }
            </div>

            <div className='input-content'>
                <Input socket={socket} />
            </div>
            <BtnLogout socket={socket} idRoom={user.idRoom} />
        </ChatContent>
    )
}

export default Chat