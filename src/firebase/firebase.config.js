// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCm8McdKkJ4hT4IQ70R3mIIGINyhxvDQd0",
  authDomain: "dragon-news-auth-374f8.firebaseapp.com",
  projectId: "dragon-news-auth-374f8",
  storageBucket: "dragon-news-auth-374f8.firebasestorage.app",
  messagingSenderId: "341155125080",
  appId: "1:341155125080:web:7608920d3d93acb71a372d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;