import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDvI-VkBLM-Asx0ZtuWA9DLZXn_mQj534o",
  authDomain: "app-186f4.firebaseapp.com",
  projectId: "app-186f4",
  storageBucket: "app-186f4.appspot.com",
  messagingSenderId: "806429321495",
  appId: "1:806429321495:web:17d9042c8c1ab130a7ef52",
  measurementId: "G-N1S84DQJNQ"
  };

  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);
  const auth = getAuth(app);

  export { db, auth };