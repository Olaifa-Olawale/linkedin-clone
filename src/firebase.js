import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDAztgbLj6ji4lKxpTJKid1WoU6k9m3bcY",
    authDomain: "linkedin-clone-de33b.firebaseapp.com",
    projectId: "linkedin-clone-de33b",
    storageBucket: "linkedin-clone-de33b.appspot.com",
    messagingSenderId: "400682174588",
    appId: "1:400682174588:web:acd7f1d0173b5a597d61f9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();


  export {auth,provider,storage};
  export default db;
