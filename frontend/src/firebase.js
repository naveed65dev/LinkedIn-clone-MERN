import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth"; 

const firebaseConfig = {
    apiKey: "AIzaSyB3jzUvJfY5HADXW1Uh6k7CscHp823twWI",
  authDomain: "discord-clone-15794.firebaseapp.com",
  projectId: "discord-clone-15794",
  storageBucket: "discord-clone-15794.appspot.com",
  messagingSenderId: "374084316470",
  appId: "1:374084316470:web:fd071e0335a65a166ed797"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

const googleSignIn = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
}

export { db, auth, googleSignIn };