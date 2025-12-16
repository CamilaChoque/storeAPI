import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: "pfi-backnode-98682s",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: "662680802668",
    appId: process.env.FIREBASE_APP_ID 
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };