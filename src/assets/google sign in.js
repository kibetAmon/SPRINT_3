// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBFjkAVqN4KyDNlTFp38os0GypQx3UwkaE",
    authDomain: "musicapp-6067.firebaseapp.com",
    databaseURL: "https://musicapp-6067-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "musicapp-6067",
    storageBucket: "musicapp-6067.appspot.com",
    messagingSenderId: "894117495357",
    appId: "1:894117495357:web:594cd8f42328c7e5462054",
    measurementId: "G-R90P5L32L8"
  };
 
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
 

  
/* GOOGLE SIGN IN */
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
const provider = new GoogleAuthProvider(app);
const auth = getAuth(app);

google.addEventListener('click',(e) => {

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName);
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage);
  });
});

/* SIGNING OUT */
google.addEventListener('click', (e) =>{
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });

});
