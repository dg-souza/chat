import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from './firebaseConnection';

const provider = new GoogleAuthProvider();

export const teste = async () => {
    const auth = getAuth();

    const response = await signInWithPopup(auth, provider)

    return response
}