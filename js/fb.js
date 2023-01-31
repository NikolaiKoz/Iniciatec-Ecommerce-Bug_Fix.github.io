// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtY1UCReqplNjmC6JJbkJq7dXLhGoCrkI",
  authDomain: "bug-fix-fb1ff.firebaseapp.com",
  projectId: "bug-fix-fb1ff",
  storageBucket: "bug-fix-fb1ff.appspot.com",
  messagingSenderId: "137934261389",
  appId: "1:137934261389:web:923d4d9b624d8a035be6c4"
};



const continuePage = () => {

  const sectionLogin = document.querySelector('.login');

  sectionLogin.innerHTML = `<a href="../index.html" title="Go to my home page"  class="form__submit">Go shopping</a>`;

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

// let currentUID;

/**
 * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
*/
// function onAuthStateChanged(user) {
//   const userName = document.getElementById("user-name");

//   console.log(user.reloadUserInfo.photoUrl);

//   if (user) {
//     currentUID = user.uid;
//     userName.style.display = "block";
//     userName.innerHTML = `${user.email}`;
//     logOut.style.display = "initial";
//     SignUpNav.style.display = "none";
//   } else {
//     // Set currentUID to null.
//     currentUID = null;
//     userName.style.display = "none";
//     logOut.style.display = "none"
//     SignUpNav.style.display = "inline-block";
//   }
// }
// };
//Listen for auth state changes
// auth.onAuthStateChanged(onAuthStateChanged);

// DOM References
const signUpbtn = document.getElementById("signUp-btn");
const googleSign = document.getElementById("googleSign");

signUpbtn.addEventListener("click", (e) => {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      writeUserData(user, email);
      // continuePage(userCredential);
      alert("User Created");
      continuePage();

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      console.log(error)
      // ..
    });
});

function writeUserData(user, email) {
  set(ref(database, "users/" + user.uid), {
    email: email,
  });
}

googleSign.addEventListener("click", (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        continuePage();
        let img = document.getElementById("ImgUser");


        img.src = user.reloadUserInfo.photoUrl;
        localStorage.setItem('Img', img);

        // console.log(img.href = user.reloadUserInfo.photoUrl)

        // ...
      })
      .catch((error) => {
        alert(error.message);
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  });



//Bind Sign out button.
// logOut.addEventListener("click", function () {
//   auth.signOut();
// });




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
// import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



// // const logOut = document.getElementById("logout")
// // const SignUpNav = document.getElementById("SignUpNav")
// // const signIn = document.getElementById("login-btn");

// signUpbtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;
//   let username = document.getElementById("username").value;

//   createUserWithEmailAndPassword(auth, email, password, username)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       writeUserData(user, username, email);
//       continuePage(userCredential);
//       alert("User Created");
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       alert(errorMessage);
//       // ..
//     });
// });

// function writeUserData(user, username, email) {
//   set(ref(database, "users/" + user.uid), {
//     email: email,
//     displayName: username,
//   });
// }

// googleSign.addEventListener("click", (e) => {
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       // This gives you a Google Access Token. You can use it to access the Google API.
//       const credential = GoogleAuthProvider.credentialFromResult(result);
//       const token = credential.accessToken;
//       // The signed-in user info.
//       const user = result.user;
//       continuePage(user);
//       // ...
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // The email of the user's account used.
//       const email = error.customData.email;
//       // The AuthCredential type that was used.
//       const credential = GoogleAuthProvider.credentialFromError(error);
//       // ...
//     });
// });

// function continuePage(user) {
//   if (user) {
//     const userName = document.getElementById("user-name");
//     const form = document.querySelector("form");
//     form.innerHTML = `   <h2>Welcome!</h2> <div class="background">

//         <div class="shape"></div>
//         <div class="shape"></div>
//     </div>`;
//     userName.innerText = user.uid;
//   }
// }

// /**
//  *
//  * The ID of the currently signed-in User. We keep track of this to detect Auth state change events that are just
//  * programmatic token refresh but not a User status change.
// */
// let currentUID;

// /**
//  * Triggers every time there is a change in the Firebase auth state (i.e. user signed-in or user signed out).
// */
// // function onAuthStateChanged(user) {
// //   const userName = document.getElementById("user-name");

// //   if (user) {
// //     currentUID = user.uid;
// //     userName.style.display = "block";
// //     userName.innerHTML = `${user.email}`;
// //     logOut.style.display = "initial";
// //     SignUpNav.style.display = "none";
// //   } else {
// //     // Set currentUID to null.
// //     currentUID = null;
// //     userName.style.display = "none";
// //     logOut.style.display = "none"
// //     SignUpNav.style.display = "inline-block";
// //   }
// // }
// // onAuthStateChanged();

// // Listen for auth state changes
// auth.onAuthStateChanged(onAuthStateChanged);

// // Bind Sign out button.
// logOut.addEventListener("click", function () {
//   auth.signOut();
// });


// // signIn.addEventListener("click", (e) => {
// //   signInWithEmailAndPassword(auth, email, password)
// //     .then((userCredential) => {
// //       // Signed in
// //       const user = userCredential.user;
// //       // ...
// //     })
// //     .catch((error) => {
// //       const errorCode = error.code;
// //       const errorMessage = error.message;
// //     });
// // });