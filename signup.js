 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import {
   getDatabase,
   set, 
   ref,
   update,
 } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
 import {
   getAuth,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
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
 const database = getDatabase(app);
 const auth = getAuth(app);
 const provider = new GoogleAuthProvider(app);

 const signUp = document.getElementById("signUp")
 const signIn = document.getElementById("signIn")
 const logout = document.getElementById("logout")


 signUp.addEventListener("click", (e) => {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var username = document.getElementById("username").value;

   createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Sign in
       const user = userCredential.user;

       set(ref(database, "users/" + user.uid), {
         username: username,
         email: email,
       });
       alert(user.diplayName, "Thank you for siging up, user has been created!");
       // ...
       if (email == email && password == password) {
         window.location.assign("index.html");
       }
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;

       alert(errorMessage);
       // ..
     });
 });

 signIn.addEventListener("click", (e) => {
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;

   signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
       // Signed in
       const user = userCredential.user;

       const dt = new Date();
       update(ref(database, "users/" + user.uid), {
         last_login: dt,
       });
       alert(user.diplayName, 'User LogedIn!');
       
       // ...
       if (email == email && password == password) {
         window.location.assign("index.html");
       }
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;

       alert(errorMessage);
       // ..
     });
 });

 const user = auth.currentUser;
 onAuthStateChanged(auth, (user) => {
   if (user) {
     // User is signed in, see docs for a list of available properties
     // https://firebase.google.com/docs/refrence/js/firebase.User
     const uid = user.uid;
     // bla bla bla
     // ...
   } else {
     // User is signed Out
     // ...
     // bla bla bla
   }
 });

 logout.addEventListener("click", (e) => {
   signOut(auth)
     .then(() => {
       // Sign Out successfull.
       alert("User is Loged Out");
     })
     .catch((error) => {
       // An error happened
       const errorCode = error.code;
       const errorMessage = error.message;

       alert(errorMessage);
     });
 });
