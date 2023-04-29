import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCTbkb5xnTW8XalA_Ow2y31365pkFzny-E",
    authDomain: "fir-95507.firebaseapp.com",
    projectId: "fir-95507",
    storageBucket: "fir-95507.appspot.com",
    messagingSenderId: "386972687381",
    appId: "1:386972687381:web:0067947e96412297fb821c",
    measurementId: "G-CMZF0KH5XX"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth };