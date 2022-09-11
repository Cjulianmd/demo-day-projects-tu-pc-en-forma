// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// import { google } from "../../../FireBase/JulianFirebase";


// const auth = getAuth();
// signInWithPopup(auth, google)
//   .then((result) => {
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     const user = result.user;
//     console.log(user);
//   }).catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     const email = error.customData.email;
//     const credential = GoogleAuthProvider.credentialFromError(error);
//   });