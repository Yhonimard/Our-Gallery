import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnarfbPVsIFpgQwquZ5G00wyHgb5-mesk",
  authDomain: "our-gallery-4af12.firebaseapp.com",
  projectId: "our-gallery-4af12",
  storageBucket: "our-gallery-4af12.appspot.com",
  messagingSenderId: "688049054370",
  appId: "1:688049054370:web:8bf7e5509bbbb0c5866dfb",
};

const app = initializeApp(firebaseConfig);
export const Storage = getStorage(app);
export const db = getFirestore(app);
