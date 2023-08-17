import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
    LoginContent
} from '../styles/GlobalStyle'

const Login = props => {
    const {
        socket
    } = props

    const navigate = useNavigate()

    const [name, setName] = useState('')

    const login = () => {
        socket.emit('login', name)

        navigate('/chat')
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

                    <button onClick={() => login()}>ENTER</button>
                </div>
            </div>
        </LoginContent>
    )
}

export default Login