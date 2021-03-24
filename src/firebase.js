import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCnCwQILJ_3U4JCiiHG19pi3VVKm49XqcY",
  authDomain: "twitterclone-472cd.firebaseapp.com",
  projectId: "twitterclone-472cd",
  storageBucket: "twitterclone-472cd.appspot.com",
  messagingSenderId: "809159850480",
  appId: "1:809159850480:web:2fe6930c5540ae1c70c535",
  measurementId: "G-LX7YG8FRR2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export default db;
