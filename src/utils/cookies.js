import { useCookies } from "react-cookie"

export const ControlCookies = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])

    setCookie('user', 'teste')
}