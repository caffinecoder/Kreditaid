import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPJogD_kCBbFc56Ktytw_utcqGNBjTopY",
  authDomain: "kreditaid-auth.firebaseapp.com",
  projectId: "kreditaid-auth",
  storageBucket: "kreditaid-auth.appspot.com",
  messagingSenderId: "1086815703251",
  appId: "1:1086815703251:web:d694a00b5a76ea30114426",
  measurementId: "G-BB2LKBC5K8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { app, auth, provider };
