import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBANiSf_-9lJ9espq4UcVVnChNWNDdavFI",
  authDomain: "facebook-messenger-clone-aa5e3.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-aa5e3.firebaseio.com",
  projectId: "facebook-messenger-clone-aa5e3",
  storageBucket: "facebook-messenger-clone-aa5e3.appspot.com",
  messagingSenderId: "803159828058",
  appId: "1:803159828058:web:5648e3f67618e9e944da63",
  measurementId: "G-HNRXCWSYYT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
