import firebase from "firebase/app";
import "firebase/performance";
import "firebase/firestore";
import "firebase/auth";
 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
};
 
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
 
const db = firebase.firestore();
 
export const authenticateAnonymously = () => {
    return firebase.auth().signInAnonymously();
};

export const createUser = (name, email, password) => {
    return db.collection('users')
    .add({
        name: name,
        email: email,
        password: password       
    });
};

export default firebase;
