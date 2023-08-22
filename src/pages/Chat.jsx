import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from '../reducer/user'
import { useSelector } from 'react-redux'

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
    const name = useSelector((state) => state.user)

    useEffect(() => {
        setCurrentUser(name)
    }, [])

    socket.on('sendChat', (response) => {
        setMessages(response)
    })

    // socket.on('receiveLogin', user => {
    //     setCurrentUser(user)

    //     dispatch(userActions.login({ name: user.name, id: user._id, email: user.email }))
    // })

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

                            messages.map(item => {
                                return (
                                    <Message messages={item} currentUser={currentUser} />
                                )
                            })

                            :

                            <>
                                <Message messages={messages} currentUser={currentUser} />
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
        </ChatContent>
    )
}

export default Chat