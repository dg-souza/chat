import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { userActions } from '../reducer/user'
import { sleep } from '../utils/filter'
import { teste } from '../services/firebase'

import {
    LoginContent
} from '../styles/GlobalStyle'

import LoginBackground from '../assets/login-background.svg'

import ArrowRight from '../assets/arrow-right.png'

const Login = props => {
    const {
        socket
    } = props

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userName, setUserName] = useState('')
    const [idRoom, setIdRoom] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isRoom, setIsRoom] = useState(false)
    const [allRooms, setAllRooms] = useState([])

    const loginGoogle = async (id) => {
        const response = await teste()

        socket.emit('loginGoogle', { name: response.user.displayName, email: response.user.email })
    }

    const login = (id) => {
        if (userName !== '' && id !== '') {
            socket.emit('login', id)

            dispatch(userActions.setIdRoom(id))
            navigate(`/chat/${id}`)
        } else { setIsValid(true) }
    }

    socket.on('receiveLogin', user => {
        console.log(user)

        setUserName(user.name)
        dispatch(userActions.login({ name: user.name, id: user._id, email: user.email }))
    })

    useEffect(() => {
        socket.emit('initialRequest')

        socket.on('response', (rooms) => {
            setAllRooms(rooms)
        })
    }, [])

    return (
        <LoginContent isValid={isValid} isRoom={isRoom} >
            <div className='content-left'>
                <img src={LoginBackground} alt="Login Background" />
            </div>

            <div className='content-right'>
                <h2>Sign In</h2>

                <div className='content-right-input'>
                    {userName !== '' ? userName : <button className='btnGoogle' onClick={() => loginGoogle()}>LOGIN GMAIL</button>}

                    <input onChange={(e) => setIdRoom(e.target.value)} value={idRoom} type="text" placeholder='Room Code' />

                    <button onClick={() => login(idRoom)}>ENTER</button>

                    <span>Enter an <b onClick={() => setIsRoom(true)}>existing room</b></span>
                </div>
            </div>

            <div className='content-right-room'>
                <h2>Choose Room</h2>

                <div className='content-right-input'>
                    {userName !== '' ? userName : <button className='btnGoogle' onClick={() => loginGoogle()}>LOGIN GMAIL</button>}
                </div>

                <div className='rooms-list'>
                    {
                        allRooms !== null

                            ?

                            allRooms.map(item => {
                                return (
                                    <div className='room'>
                                        <span>{item}</span>

                                        <img
                                            src={ArrowRight}
                                            onClick={() => {
                                                setIdRoom(item)
                                                login(item)
                                            }}
                                            alt="Arrow" />
                                    </div>
                                )
                            })

                            :

                            <></>
                    }
                </div>

                <span>create <b onClick={() => setIsRoom(false)}>new room</b></span>
            </div>
        </LoginContent>
    )
}

export default Login