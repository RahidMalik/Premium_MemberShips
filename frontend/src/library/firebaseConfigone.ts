import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBzNedOCtyKHEfNrwSaB2P8JENn3nyIDfs",
    authDomain: "oauth-dc105.firebaseapp.com",
    projectId: "oauth-dc105",
    storageBucket: "oauth-dc105.firebasestorage.app",
    messagingSenderId: "571102974543",
    appId: "1:571102974543:web:a16be4b748be9523c0103a",
    measurementId: "G-B2CTQJY252"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export them for use in components
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
