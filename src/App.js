import React from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';

// import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'
import './App.css';
import writeNewPost from './Pages/Feed'
// import Post from 'post.js'


// import Home from './Pages/Home'
import firebase, {db, auth, fire, dataBase} from './Fire'
import {NavLink} from 'react-router-dom'
import Post from './Components/PostSection'
import UserProfile from './Pages/UserProfile'
import PostToFeed from './Pages/Feed';
// import Home from '../Home'
const usersRef = db.collection('users')


class App extends React.Component {
    
    
    state={
        user:{
            displayName: '',
            email:'',
            photoURL:'',
            uid:''
            },
            // active: false,
    }

    

    componentDidMount(){
        auth.onAuthStateChanged((user) => {
            if (user){
                
                this.setState({user:{ 
                    email:user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    uid : user.uid,
                    // active: true
                }})}
                // this.setState({active: true})
                // this.setState({active: true})

                // dataBase.ref('users/' + user.uid).set({
                //             displayName: user.displayName,
                //             email: user.email,
                //             photoURL: user.photoURL,
                //             // uid: user.uid
                //           }, function(error) {
                //             if (error) {
                //               console.log(error)
                //             } else {
                //             }
                //           });
                //         }

                // db.collection('users').doc(this.uid).set(this.state.user)


            
            else{
                this.setState({user: null})
                console.log("auth problem component did mount in app js")
            }

            
        }
        )
    }

    
    // writeUserData(displayName, email, photoURL,uid) {
    //     userRef('users/' + uid).set({
    //       username: displayName,
    //       email: email,
    //       profile_picture : photoURL
    //     });
    //   }

    // writeUserData(uid, displayName, email, photoURL) {
    //     dataBase.collection('users/' + uid).set({
    //         displayName: this.state.user.displayName,
    //         email: this.state.user.email,
    //         photoURL: this.state.user.photoURL,
    //         uid: this.state.user.uid
    //     });
    //   }

    // addPost(e) {
    //     e.preventDefault()
    //     let title = e.currentTarget.title.value
    //     let text = e.currectTarget.text.value
        
    //     return new Promise((res, rej) => {
    //         this.firestore
    //             .collection("posts")
    //             .add({
    //                 text,
    //                 uid: this.uid,
    //                 title,
    //                 timestamp: this.timestamp,
                    
    //             })
    //             .then(ref => {
    //                 res(ref)
    //             })
    //             .catch(error => {
    //                 rej(error)
    //             })
    //     })
    // }

    get timestamp() {
        return Date.now()
    }

  
  
    signOutUser = () => {
        auth.signOut()
    }

    signInUser = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
        .then( (result) => {
        const user = result.user
        console.log(user)
        })
        .catch(function(error) {
            console.log(error)


        })}

        // submitProfile=(e)=> {
        //     e.preventDefault();
        //     let email = e.currentTarget.createEmail.value;
        //     let password = e.currentTarget.createPassword.value;
        //     // let email = 'os813@nyu.edu'
        //     // let password = 'gabby123'
        //     firebase
        //         .auth()
        //         .createUserWithEmailAndPassword(email, password)
        //         .then(function(response) {
        //             setLoggedIn(true);
        //         })
        //         .catch(function(error) {
        //             console.log('error', error);
        //         });
        //     }

        // userDidMount(){
        //     db.collection('users')
        //         .get()
        //         .then(snapshot => {
                    
        //             const users = []
        //             snapshot.forEach(doc => {
        //                 const data = doc.data()
        //                 users.push(data)
        //             })
        //         this.setState({users: users})
        //         console.log(snapshot)
        //         })
        //         .catch(error => console.log(error))
                
            
        // }


    render(){
        return(
            <div className = "App">

                <Router>
                    <Nav signout = {this.signOutUser} user = {this.state.user}/>

                    <Route path = '/login'  component={() => <Login signIn = {this.signInUser} user = {this.state.user} />}>
                    </Route>

                    <Route path = '/userprofile' component={() => <UserProfile  user = {this.state.user}  />}>
                    </Route>

                    {/* <Route path = '/home' component={() => <Home addPost={this.sendPost} user = {this.state.user} />}>
                    </Route> */}

                    <Route path = '/feed' component={() => <PostToFeed  user = {this.state.user.uid} />}>
                    </Route>

                    
                    
                </Router>
            
                 
            
            </div>
        )
    }
}
        
    



export default App

function Nav(props){
    
        
    return(
       
        <div>
            <div>
            
                {
                    props.user &&
                    <div>
                    <button onClick={props.signout}>
                        Sign Out
                    </button>
                    {/* <button>
                        <NavLink to='./Home'>Home</NavLink>
                    </button> */}
                    <button>
                        <NavLink to='./Feed'>Feed</NavLink>
                    </button>
                    <button>
                        <NavLink to='./UserProfile' >Profile</NavLink>
                    </button>
                    </div>
                }
            </div>

            <div>

                {
                    !props.user &&
                    <button>
                        <NavLink to='/login'>login</NavLink>
                    </button>
                }
            </div>
            
            
            
            
        </div>
        
    )
}

function Login(props){
    return(
        <div>
        {
            !props.user &&
            <div>
                    <h3>Login</h3>
                <button onClick={props.signIn}>Google</button>
            </div>
        }
      
        </div>
    )
}

// function userInfo(props){
//     return(
//         <div>
//             {
//                 props.user &&
//                 <div>

//                 </div>
//             }
//         </div>
//     )
// }


