import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyADFEN0JgGmShSj6wR6rqVau2qVpFPLK2k',
  authDomain: 'crown-clothing-db-2bbae.firebaseapp.com',
  projectId: 'crown-clothing-db-2bbae',
  storageBucket: 'crown-clothing-db-2bbae.appspot.com',
  messagingSenderId: '340425502453',
  appId: '1:340425502453:web:47a20384b3f715be7a5fbc',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  // if user does not exits
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
  // if user data exists
};
