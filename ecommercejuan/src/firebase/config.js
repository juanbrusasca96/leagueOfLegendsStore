// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1O_pVQkP4fLUJst6-iPIf5B9E6T-fJaI",
    authDomain: "ecommercejuan-3fdde.firebaseapp.com",
    projectId: "ecommercejuan-3fdde",
    storageBucket: "ecommercejuan-3fdde.appspot.com",
    messagingSenderId: "1010970863156",
    appId: "1:1010970863156:web:2bab2209b2dab9c8d84c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function iniFirebase() {
    return app;
}