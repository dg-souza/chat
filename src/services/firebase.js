import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { app } from '../services/firebaseConnection'

const provider = new GoogleAuthProvider();

const auth = getAuth();

export const loginFirebase = async () => {
    const response = await signInWithPopup(auth, provider)

    return response
}

export const logoutFirebase = () => {
    signOut(auth)
}