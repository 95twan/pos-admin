import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";

export const API_HOST = 'http://127.0.0.1:8002/api'

const firebaseConfig = {
    apiKey: "AIzaSyBKDscwoq7XlOZ1VZhBzG21FBuzQLQWu-8",
    authDomain: "pos-project-62037.firebaseapp.com",
    projectId: "pos-project-62037",
    storageBucket: "pos-project-62037.appspot.com",
    messagingSenderId: "785504791066",
    appId: "1:785504791066:web:b35fa31e08a8806a03ffa3",
    measurementId: "G-0RVV3328Z2"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export default storage;
