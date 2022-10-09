import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain:process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABSE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
    
//   };

  const firebaseConfig = {
    apiKey: "AIzaSyAaKTYc2SAIOfrUAX8dMO5vGgIR3XU9yPo",
    authDomain: "aessk-9d309.firebaseapp.com",
    databaseURL: "https://aessk-9d309-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "aessk-9d309",
    storageBucket: "aessk-9d309.appspot.com",
    messagingSenderId: "957720198665",
    appId: "1:957720198665:web:41fb2f0c2b8d71b20a82d8",
    measurementId: "G-FJ07RKX0QJ"
  };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}