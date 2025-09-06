import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDIiJg4P_v4c1QA52pHgC0Z-O-X0m97uEs",
  authDomain: "login-387a1.firebaseapp.com",
  projectId: "login-387a1",
  storageBucket: "login-387a1.appspot.com",
  messagingSenderId: "234985712100",
  appId: "1:234985712100:web:0a3380710918ff51213ff1",
  measurementId: "G-4KW830W4CR"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
