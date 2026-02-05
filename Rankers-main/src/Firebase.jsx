import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDaZwS88cw_jnbtZIHVCvROg2aOuLpQkVg",
  authDomain: "medical-app-e7ce6.firebaseapp.com",
  projectId: "medical-app-e7ce6",
  storageBucket: "medical-app-e7ce6.firebasestorage.app",
  messagingSenderId: "53375944627",
  appId: "1:53375944627:web:3dfa8d41389d86e600adc6",
  measurementId: "G-3D4TFKD7P5",
  databaseURL: "https://medical-app-e7ce6-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
