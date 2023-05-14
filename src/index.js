import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const Context = createContext(null);

const app = initializeApp({
    apiKey: "AIzaSyDkpyB6uGjKm0mMBo5euMIu1K2vrXIOc-M",
    authDomain: "react-firebase-chat-2ef23.firebaseapp.com",
    projectId: "react-firebase-chat-2ef23",
    storageBucket: "react-firebase-chat-2ef23.appspot.com",
    messagingSenderId: "1091764846450",
    appId: "1:1091764846450:web:1ffdf3e36199bf52a727eb"
});

const auth = getAuth(app);
const db = getFirestore(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
      app,
      auth,
      db
  }}>
    <App />
  </Context.Provider>
);
