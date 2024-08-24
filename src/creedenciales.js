// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZAQixdBIWXQ0tS-jHtaYFku-Lpn2w71I",
  authDomain: "proyecto-grado-6da5a.firebaseapp.com",
  projectId: "proyecto-grado-6da5a",
  storageBucket: "proyecto-grado-6da5a.appspot.com",
  messagingSenderId: "459275318514",
  appId: "1:459275318514:web:f5f1ab29c358b53315cc6b",
  measurementId: "G-0CSJ7XCXY9"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(appFirebase);
export default appFirebase; 
