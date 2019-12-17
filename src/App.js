import React, { useEffect, useState } from 'react';
import { Redirect, Route, BrowserRouter as Router } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './App.css';
import Header from "./Components/Header";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Logout from './Pages/Logout';
import UserProfile from './Pages/UserProfile';
import Home from './Pages/Home'


let firebaseConfig = {
  apiKey: "AIzaSyB_oxqGprEl-Hkti8YOG-oaLqW_vTdZjyk",
  authDomain: "homework-five-web.firebaseapp.com",
  databaseURL: "https://homework-five-web.firebaseio.com",
  projectId: "homework-five-web",
  storageBucket: "homework-five-web.appspot.com",
  messagingSenderId: "523886125962",
  appId: "1:523886125962:web:09a035ab8288d145eb5e73",
  measurementId: "G-FHWXK88PBC"
};

function App(){

    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState({})


    useEffect(() => {}, [firebaseConfig])

    useEffect(() => {
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig)
        }

        firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .catch(function(error){
            console.log('error', error);
    })
    
    }, [firebaseConfig])

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                setLoggedIn(true)
                setUser(user)
            }else{
                setLoggedIn(false)
                setUser({});
            }
        })
        
    }, [])

    

    function signupFunction(e) {
        e.preventDefault();
        let email = e.currentTarget.createEmail.value;
        let password = e.currentTarget.createPassword.value;
        
        // let email = 'os813@nyu.edu'
        // let password = 'gabby123'
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function(response) {
                setLoggedIn(true);
            })
            .catch(function(error) {
                console.log('error', error);
            });
        }

    function loginFunction(e){
        e.preventDefault();

        let email = e.currentTarget.loginEmail.value;
        let password = e.currentTarget.loginPassword.value;

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(function(response) {
                setLoggedIn(true);
            })
                .catch(function(error) {
                    console.log('error', error);
            });


    }

    function logoutFunction() {
        firebase.auth().signOut().then(function() {
            setLoggedIn(false);
        }).catch(function(error) {
            console.log('error', error);
        });
    }




    return(
        <div className = "App">
            <Header loggedIn ={loggedIn} logoutFunction={logoutFunction} />
            <Router>
                <Route exact path="/">
                    {loggedIn ? <UserProfile user = {user} /> : <Redirect to="/login" />}
                </Route>
                <Route exact path="/signup">
                    {loggedIn ? <Redirect to="/" /> : < Signup signupFunction={signupFunction} />}
                </Route>
                <Route exact path="/login">
                    {loggedIn ? <Redirect to="/" /> : <Login loginFunction={loginFunction}/>}
                </Route>
                <Route exact path="/userprofile">
                    {loggedIn ? <Redirect to="/" /> : <UserProfile loginFunction={loginFunction}/>}
                </Route>
                <Route exact path="/home">
                    {loggedIn ? <Redirect to="/" /> : <Home loginFunction={loginFunction}/>}
                </Route>


            </Router>
        </div>
    )

}

export default App