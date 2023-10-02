import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../reducer/user'
import { loginFirebase } from '../services/firebase'

import { useCookies } from 'react-cookie'

import {
    LoginContent
} from '../styles/GlobalStyle'

import LoginBackground from '../assets/login-background.svg'

import ArrowRight from '../assets/arrow-right.png'
import { getMessage } from '../utils/Toast'

const Login = props => {
    const {
        socket
    } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [cookies, setCookie] = useCookies(['user'])

    const [idRoom, setIdRoom] = useState('')
    const [isRoom, setIsRoom] = useState(false)
    const [allRooms, setAllRooms] = useState([])

    const loginGoogle = async () => {
        const response = await loginFirebase()

        socket.emit('loginGoogle', { name: response.user.displayName, email: response.user.email })
    }

    const login = (id) => {
        if (cookies.user !== 'undefined' && id !== '') {
            socket.emit('login', id)

            dispatch(userActions.setIdRoom(id))
            navigate(`/chat/${id}`)
        } else getMessage('error', 'Login and type/choose a room')
    }

    socket.on('receiveLogin', user => {
        dispatch(userActions.login({ name: user.name, id: user._id, email: user.email }))
        setCookie('user', { name: user.name, id: user._id, email: user.email })
    })

    const verifyCookie = () => {
        if (cookies.user) dispatch(userActions.login({ name: cookies.user.name, id: cookies.user.id, email: cookies.user.email }))
    }

    useEffect(() => {
        socket.emit('initialRequest')

        socket.on('response', (rooms) => {
            setAllRooms(rooms)
        })

        verifyCookie()
        // eslint-disable-next-line
    }, [])

    return (
        <LoginContent isRoom={isRoom} >
            <div className='content-left'>
                <img src={LoginBackground} alt="Login Background" />
            </div>

            <div className='content-right'>
                <h2>Sign In</h2>

                <div className='content-right-input'>
                    {cookies.user !== 'undefined' ? cookies.user.name : <button className='btnGoogle' onClick={() => loginGoogle()}>LOGIN GMAIL</button>}

                    <input onChange={(e) => setIdRoom(e.target.value)} value={idRoom} type="text" placeholder='Room Code' />

                    <button className='btnLogin' onClick={() => login(idRoom)}>ENTER</button>

                    <img src={ArrowRight} onClick={() => login(idRoom)} alt="Arrow" />
                </div>

                <span>Enter an <b onClick={() => setIsRoom(true)}>existing room</b></span>
            </div>

            <div className='content-right-room'>
                <h2>Choose Room</h2>

                <div className='content-right-input'>
                    {cookies.user !== 'undefined' ? cookies.user.name : <button className='btnGoogle' onClick={() => loginGoogle()}>LOGIN GMAIL</button>}
                </div>

                <div className='rooms-list'>
                    {
                        allRooms.length > 0

                            ?

                            allRooms.map((item, index) => {
                                return (
                                    <div className='room' key={index}>
                                        <span>{item}</span>

                                        <img
                                            src={ArrowRight}
                                            onClick={() => {
                                                setIdRoom(item)
                                                login(item)
                                            }}
                                            alt="Arrow"
                                        />
                                    </div>
                                )
                            })

                            :

                            <>No rooms created</>
                    }
                </div>

                <span>create <b onClick={() => {
                    setIsRoom(false)
                    setIdRoom('')
                }}>new room</b></span>
            </div>
        </LoginContent>
    )
}

export default Login