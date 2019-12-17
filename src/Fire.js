import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB_oxqGprEl-Hkti8YOG-oaLqW_vTdZjyk",
    authDomain: "homework-five-web.firebaseapp.com",
    databaseURL: "https://homework-five-web.firebaseio.com",
    projectId: "homework-five-web",
    storageBucket: "homework-five-web.appspot.com",
    messagingSenderId: "523886125962",
    appId: "1:523886125962:web:09a035ab8288d145eb5e73",
    measurementId: "G-FHWXK88PBC"
}

export const fire = firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const db = firebase.firestore()
export const dataBase = firebase.database()
export default firebase
