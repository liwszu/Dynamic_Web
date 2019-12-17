import React from 'react'
import firebase, {db, auth, fire, dataBase} from './Fire'

class FireFunction{
 

    addPost = async ({text, title}) =>{
        
        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    text,
                    uid: this.uid,
                    title,
                    timestamp: this.timestamp,
                    
                })
                .then(ref => {
                    res(ref)
                })
                .catch(error => {
                    rej(error)
                })
        })
    }



    






    signOut = () => {
        firebase.auth().signOut();
    }

    get firestore() {
        return firebase.firestore()
    }

    get uid() {
        return(auth().currentUser || {}).uid
    }

    get timestamp() {
        return Date.now()
    }
}




FireFunction.shared = new FireFunction();
export default FireFunction