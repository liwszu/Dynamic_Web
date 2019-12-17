import React, {Component} from 'react';
// import './App.css';
import * as firebase from 'firebase/app';

// const db = firebase.database()
// const dbRof = db.ref().child('data')

class Home extends Component{
    constructor(){
        super()
        this.state={
            userName:'',

        }
    }

    componentDidMount(){
        const userRef = firebase.database().ref().child('react');
        //name what you're calling
        userRef.on()
    }
    

    render(){
        return(
            <div className="App">
                <h1>{this.state.email}</h1>
            </div>
        )
    }
}

export default Home

