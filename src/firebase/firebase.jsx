import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTrH9WceCymg1dp4kRQZoAcztZyeae3kk",
    authDomain: "jewel-tools.firebaseapp.com",
    projectId: "jewel-tools",
    storageBucket: "jewel-tools.appspot.com",
    messagingSenderId: "488715671288",
    appId: "1:488715671288:web:631e447162e350778b4d0d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export default db;