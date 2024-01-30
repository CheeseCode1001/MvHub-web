 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 
 import {
   getAuth,
   GoogleAuthProvider,
   signInWithRedirect,
   getRedirectResult,
   signInWithPopup,
 } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyANqDpvDf6nXKA2SydEz5CqjhLg7CU_Q4M",
   authDomain: "mvhub-bbc88.firebaseapp.com",
   projectId: "mvhub-bbc88",
   storageBucket: "mvhub-bbc88.appspot.com",
   messagingSenderId: "506272938140",
   appId: "1:506272938140:web:88f716e22f17635bc85559",
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider(app);

const login = document.getElementById('login')


  // Google Sign up

  login.addEventListener("click", (e) => {
    // signInWithRedirect(auth, provider);

    // getRedirectResult(auth)
    // .then((result) => {
    // // This gives you a Google Access Token. You can use it to access Google APIs.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    // // The signed-in user info.
    // const user = result.user;
    // // IdP data available using getAdditionalUserInfo(result)
    // // ...
    // }).catch((error) => {
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.customData.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
    // alert(user.diplayName);
    // });

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // name=diplayName
        // email=email
        // photo = photoURL

        alert(user.diplayName);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
  });