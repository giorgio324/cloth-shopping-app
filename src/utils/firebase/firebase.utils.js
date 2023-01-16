// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDLpfNyKefJZusR5zOQCMfQyFDIxmk_mIo',
  authDomain: 'cloth-shop-bed70.firebaseapp.com',
  projectId: 'cloth-shop-bed70',
  storageBucket: 'cloth-shop-bed70.appspot.com',
  messagingSenderId: '787483031039',
  appId: '1:787483031039:web:20b82f92c8635f0e3423ca',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// create provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});
// export variables/functions
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  // if user already exists then return userDocRef
  // if user does not exist then create / set the document with data from userAuth in my collenction
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userDocRef;
};
