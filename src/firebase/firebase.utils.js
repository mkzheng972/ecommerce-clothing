import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBQ12ZDGO1gkmYgBoR706DARKQHd2_rgiE',
  authDomain: 'ecommerce-clothing-db-bad1e.firebaseapp.com',
  databaseURL: 'https://ecommerce-clothing-db-bad1e.firebaseio.com',
  projectId: 'ecommerce-clothing-db-bad1e',
  storageBucket: 'ecommerce-clothing-db-bad1e.appspot.com',
  messagingSenderId: '983282667649',
  appId: '1:983282667649:web:03fce7243baad4d7cb7d80',
  measurementId: 'G-JHGSX8VBMJ',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnapShot = await userRef.get();

  if (!userSnapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.error('error creating user', error);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider(); // there are other auth.(company)AuthProvider methods
googleProvider.setCustomParameters({ prompt: 'select_account' }); // this always trigger google pop up for sign-in/auth
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider); // auth.signinwith(option -> can be popup or redirect)

export default firebase;
