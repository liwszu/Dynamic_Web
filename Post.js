import React, {Component} from 'react';
import Fire from './src/Fire'

const firebase = require('firebase')
require("firebase/firestore")

export default class Post extends Component{
    
    state={
        
            text:'',
            title: '',
         
        errorMessage: null
        
    }

    addPost = async ({text, title}) =>{
     

        return new Promise((res, rej) => {
            this.firestore
                .collection("posts")
                .add({
                    text,
                    uid: this.uid,
                    timestamp: this.timestamp,
                    title
                })
                .then(ref => {
                    res(ref)
                })
                .catch(error => {
                    rej(error)
                })
        })
    }

   
    sendPost = () => {
        
            addPost({text: this.state.text.trim(), localUri: this.state.image})
            .then(ref => {
                this.setState({text: text, title:title})
                this.props.navigation.goBack()
            })
            .catch(error => {
                alert(error)
            })
    }




    

    render(){
    
        return(
            
            <div>
                <div >
                    <button onClick= {this.sendPost}>

                        <h1 >Post</h1>

                    </button>

                </div>


                <div >
            

                    <input 
                    style={{flex:1}}
                    placeholder="Write Post Here..."
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    ></input>
                </div>
                </div>



          
        )
    }
}