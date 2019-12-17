import React, {useState, useEffect} from "react"
import firebase, {db, fire, auth} from '../Fire'

export default function PostForm({uid}){
  const [submit, setSubmit] = useState(false);
  const [posts, setPosts] = useState({})


    function sendIt(e) {
      setSubmit(true)
      e.preventDefault(e);
      let destination = e.currentTarget.destination.value
      let description = e.currentTarget.description.value
      let postKey = firebase.database().ref().child('posts').push().key;
      let updates = {};
      
      
      db.collection('posts')
          .get()
                .then(snapshot => {
                    
                    const posts = {destination, description, postKey}
                    
                    snapshot.forEach(doc => {
                        const data = doc.data()
                        posts.push(data)
                    })
                   
              
                    
                    // updates['/posts/' + postKey] = doc.data()
                    // updates['/user-posts/' + uid + '/' + postKey] = doc.data
                    // setSubmit(true);
                    // console.log(snapshot)
                  
                    // return firebase.database().ref().update(updates);

                
                })
                .catch(error => console.log(error))
          
              }

    return (
        <form className="postForm" onSubmit={e => sendIt(e)}>
          <label htmlFor="destination">Destination: </label>
                <input type="text" name="destination" placeholder="Where did you visit?" />
          <label htmlFor="description">Share Your Story</label>
                <input type="text" name="description" placeholder="Tell us about it!" />
          <div >

          <button disabled={submit}>Post</button>
          {submit}
          </div>
        </form>
    );
  }