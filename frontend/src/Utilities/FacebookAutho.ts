import { signInWithPopup } from "firebase/auth";
import { auth, facebookProvider } from "@/library/firebaseConfigone";

export const FacebookSignUp = async () => {
    try {
        const result = await signInWithPopup(auth, facebookProvider);
        //We've received the user data; 
        const user = result.user;
        console.log("FB User Data:", user);
        // Got the TOKEN and send to the backend;
        const TokenId = await user.getIdToken();
        console.log("Token for Backend:", TokenId);
        alert(`Welcome ${user.displayName}!`);
    } catch (error) {
        const err = error as Error;
        console.error("FB Login Error:", err.message);
    }
}