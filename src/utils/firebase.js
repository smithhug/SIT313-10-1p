// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIYSG8dFI-EOk3CdMAVQAB_GhJd5PtdIM",
  authDomain: "sit315-7-1p.firebaseapp.com",
  projectId: "sit315-7-1p",
  storageBucket: "sit315-7-1p.appspot.com",
  messagingSenderId: "35995606993",
  appId: "1:35995606993:web:f581fc2b043f14a865caf0",
  measurementId: "G-J7X7MG3RY0"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseapp);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth();
//export const signInWithPopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) =>{
    if (!userAuth) return;

    const userDocRef = doc (db, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (! userSnapshot.exists()){
        const {displayName, lastName, email} = userAuth;
        const createdAt = new Date();
    
        try {
            await setDoc(userDocRef, {
                displayName,
                lastName,
                email,
                createdAt,
                ...additionalInfo
            })
        } catch (error){
            console.log('Error in creating ', error.message)
        }
    }
    console.log(userDocRef);
    return userDocRef;
}



export const createAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) =>{
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}