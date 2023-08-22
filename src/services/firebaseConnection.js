// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdb6vi1J8ea_09F1QgHtG2UlCeJrb0bBA",
  authDomain: "chat-df764.firebaseapp.com",
  projectId: "chat-df764",
  storageBucket: "chat-df764.appspot.com",
  messagingSenderId: "697058785211",
  appId: "1:697058785211:web:d7a85156b9ecdc385c769e",
  measurementId: "G-989RPMMBFH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);