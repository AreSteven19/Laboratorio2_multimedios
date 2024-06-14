import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC5HlTWnByXOIWlqof-AOzwTk-ktX0IMDU",
  authDomain: "appfruit-1d53d.firebaseapp.com",
  projectId: "appfruit-1d53d",
  storageBucket: "appfruit-1d53d.appspot.com",
  messagingSenderId: "275727742234",
  appId: "1:275727742234:web:45bde9342c35fbe588a8a3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);