// import { initializeApp } from "firebase/app";
// import { getFirestore, collection } from "firebase/firestore";
// // import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlzm1kg59-j22SrKmfSSjF6aYqqcNT0-8",
//   authDomain: "animewatch-d3144.firebaseapp.com",
//   projectId: "animewatch-d3144",
//   storageBucket: "animewatch-d3144.appspot.com",
//   messagingSenderId: "709048885026",
//   appId: "1:709048885026:web:9b302c2e9f95a686cd8f7b",
// };

// const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);
// // const googleProvider = new GoogleAuthProvider();
// export const db = getFirestore(app);
// export const animeRef = collection(db, "Anime")
// export const reviewRef = collection(db, "review")
// export const usersRef = collection(db, "Users");

// export default app;
// // export { auth , googleProvider };
// ==================================================

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDlzm1kg59-j22SrKmfSSjF6aYqqcNT0-8",
//   authDomain: "animewatch-d3144.firebaseapp.com",
//   projectId: "animewatch-d3144",
//   storageBucket: "animewatch-d3144.appspot.com",
//   messagingSenderId: "709048885026",
//   appId: "1:709048885026:web:9b302c2e9f95a686cd8f7b",
// };

// const app = initializeApp(firebaseConfig);

// const firestore = getFirestore(app);

// export { firestore };
// export const db = getFirestore(app);
// export const animeRef = collection(db, "Anime");
// export const reviewRef = collection(db, "review");
// export const usersRef = collection(db, "Users");
// export const auth = getAuth(app);

// export default app;


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlzm1kg59-j22SrKmfSSjF6aYqqcNT0-8",
  authDomain: "animewatch-d3144.firebaseapp.com",
  projectId: "animewatch-d3144",
  storageBucket: "animewatch-d3144.appspot.com",
  messagingSenderId: "709048885026",
  appId: "1:709048885026:web:9b302c2e9f95a686cd8f7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);

// Export references to Firestore collections
export const animeRef = collection(db, "Anime");
export const reviewRef = collection(db, "review");
export const usersRef = collection(db, "Users");

export default app;


