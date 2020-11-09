import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = 
    {
    apiKey: "AIzaSyBB-yyH3AIjn9Y6hNCEfBdU9yMYSsv-kEs",
    authDomain: "clothing-db-cd204.firebaseapp.com",
    databaseURL: "https://clothing-db-cd204.firebaseio.com",
    projectId: "clothing-db-cd204",
    storageBucket: "clothing-db-cd204.appspot.com",
    messagingSenderId: "134283250644",
    appId: "1:134283250644:web:afa03b37bba8f6aebd2441",
    measurementId: "G-SDHYX7K728"
};
  
export const createUserProfileDocument = async (userAuth,additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}
firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;