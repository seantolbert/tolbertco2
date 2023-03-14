import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0DdwG3p60Khc1dG-h0tm98MJxWj6V_lY",
  authDomain: "tolbertco-f5418.firebaseapp.com",
  projectId: "tolbertco-f5418",
  storageBucket: "tolbertco-f5418.appspot.com",
  messagingSenderId: "1523512748",
  appId: "1:1523512748:web:98c851ac4e955a6a0a7609",
  measurementId: "G-MXTMCXKCKC",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
