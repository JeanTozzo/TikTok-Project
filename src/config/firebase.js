import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBlhyuvC2z6xdRLqTkHx3Mk-fsCoYUVGnc",
  authDomain: "fullstack---tiktok.firebaseapp.com",
  projectId: "fullstack---tiktok",
  storageBucket: "fullstack---tiktok.appspot.com",
  messagingSenderId: "779202438518",
  appId: "1:779202438518:web:588657229062e21343c657"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;