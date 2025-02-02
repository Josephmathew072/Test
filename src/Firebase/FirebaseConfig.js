import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdq2peo8c1-jCNpbOiDYm6n1ZagaJena4",
  authDomain: "netflix-clone-a4360.firebaseapp.com",
  projectId: "netflix-clone-a4360",
  storageBucket: "netflix-clone-a4360.firebasestorage.app",
  messagingSenderId: "153017387769",
  appId: "1:153017387769:web:925a706ee5e3a7648cf028",
  // measurementId: "G-9TB7LL3YPM",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(FirebaseApp);
const analytics = getAnalytics(FirebaseApp);
