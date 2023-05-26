import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA6EZ9z-cJ7yy1nsgfeq81f0XwB3LmrShs",
  authDomain: "travelbd-61dc8.firebaseapp.com",
  projectId: "travelbd-61dc8",
  storageBucket: "travelbd-61dc8.appspot.com",
  messagingSenderId: "586973814240",
  appId: "1:586973814240:web:2a350d2319f7e1e7001f85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
