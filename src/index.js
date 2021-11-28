import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as firebase from 'firebase/app';
//import 'firebase/firestore';
//import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
/*const firebaseConfig = {
  apiKey: "AIzaSyCTrH9WceCymg1dp4kRQZoAcztZyeae3kk",
  authDomain: "jewel-tools.firebaseapp.com",
  projectId: "jewel-tools",
  storageBucket: "jewel-tools.appspot.com",
  messagingSenderId: "488715671288",
  appId: "1:488715671288:web:631e447162e350778b4d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}*/

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
