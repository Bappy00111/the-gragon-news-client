// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAps-BuLi-mCULpfjGK4eNs3-ZhG2ldrvY",
  authDomain: "the-dragon-news-7dcc4.firebaseapp.com",
  projectId: "the-dragon-news-7dcc4",
  storageBucket: "the-dragon-news-7dcc4.appspot.com",
  messagingSenderId: "865239624156",
  appId: "1:865239624156:web:463f95758ce101dd5e8719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;