// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCFIvmn3HalrL9JpX4S7Ai7n8LP0Q_7uA",
  authDomain: "recipe-sharing-platform-c3307.firebaseapp.com",
  projectId: "recipe-sharing-platform-c3307",
  storageBucket: "recipe-sharing-platform-c3307.firebasestorage.app",
  messagingSenderId: "288577302014",
  appId: "1:288577302014:web:ce7aaa057b1504cc34e4af",
  measurementId: "G-FY4K1CQ3SK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
