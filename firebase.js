import firebase from 'firebase';
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyBvNwBI_k6WR2zW_xUPoR3tjpC5W_mYxwU",
    authDomain: "tax-axis.firebaseapp.com",
    projectId: "tax-axis",
    storageBucket: "tax-axis.appspot.com",
    messagingSenderId: "287713917351",
    appId: "1:287713917351:web:691fa632f8e2a1fbd49e82"
  };

  const app = !firebase.apps.length
   ? firebase.initializeApp(firebaseConfig)
   : firebase.app();

  // const app = firebase.initializeApp(firebaseConfig)

   const storage = firebase.storage()
   const db= app.firestore()

  const auth = app.auth()

  export {db, storage}
