// import React, {Component} from 'react'
import firebase, {db, fire, auth} from '../Fire'

// export function writeNewPost({uid, username, picture, title, body}) {
//     // A post entry.
//     var postData = {
//       author: username,
//       uid: uid,
//       body: body,
//       title: title,
//       starCount: 0,
//       authorPic: picture
//     };
  

//     var postKey = firebase.database().ref().child('posts').push().key;
  
//     var updates = {};
//     updates['/posts/' + postKey] = postData;
//     updates['/user-posts/' + uid + '/' + postKey] = postData;
  
//     return firebase.database().ref().update(updates);
//   }

import React from 'react'
import PostForm from '../Components/PostForm'

export default function PostToFeed({user}) {
  return(
    <div>
    {
            user &&
            
            <PostForm uid={user.uid ? user.uid : "Login to continue"} />
    }
    </div>

  );

}