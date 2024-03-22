import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxf5Pdgo2aFmMhyPl25Gj-c3s0SJ1FOXg",
  authDomain: "not-netflix-8b562.firebaseapp.com",
  projectId: "not-netflix-8b562",
  storageBucket: "not-netflix-8b562.appspot.com",
  messagingSenderId: "197272391042",
  appId: "1:197272391042:web:377ad9685ea941dfe3d39b",
  measurementId: "G-G418SMEPVR"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) {
    return;
  }
  const userRef = db.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const createdAt = new Date();

    try {
      await userRef.set({
        createdAt,
        watchlist: [],
      });
    } catch (error) {
      console.log("error.message");
    }
  }
  return userRef;
};
export const db = firebase.firestore();
export default firebase;
