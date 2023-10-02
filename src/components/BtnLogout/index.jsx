import { useDispatch } from 'react-redux'
import { userActions } from '../../reducer/user'
import { useNavigate } from 'react-router-dom'

import { logoutFirebase } from '../../services/firebase'

import { useCookies } from 'react-cookie'

import {
    Content
} from './style'

import LogoutIcon from '../../assets/logout.png'

const BtnLogout = props => {
    const {
        socket,
        idRoom
    } = props

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [cookies, removeCookie] = useCookies(['user'])

    const logout = () => {
        removeCookie('user')

        socket.emit('logout', idRoom)

        dispatch(userActions.logout())

        logoutFirebase()

        navigate('/')
    }

    return(
        <Content>
            <img onClick={() => logout()} src={LogoutIcon} alt="Logout" />
        </Content>
    )
}

export default BtnLogout