import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../reducer/user'

import {
    LoginContent
} from '../styles/GlobalStyle'

const Login = props => {
    const {
        socket
    } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [idRoom, setIdRoom] = useState('')

    const login = () => {
        dispatch(userActions.setIdRoom(idRoom))

        socket.emit('login', { name: name, idRoom: idRoom })

        navigate(`/chat/${idRoom}`)
    }

    return (
        <LoginContent>
            <div className='content-left'>
                <h1>Welcome to chat</h1>
            </div>

            <div className='content-right'>
                <h2>Enter a nickname</h2>

                <div className='content-right-input'>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Nickname' />

                    <input onChange={(e) => setIdRoom(e.target.value)} type="text" placeholder='Room Code' />

                    <button onClick={() => login()}>ENTER</button>
                </div>
            </div>
        </LoginContent>
    )
}

export default Login