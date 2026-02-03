import { auth, googleProvider } from '../library/firebaseConfigone';
import { signInWithPopup } from 'firebase/auth';

export const loginWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result.user); // Login successful!
    } catch (error) {
        console.error(error);
    }
}