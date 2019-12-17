import React, { useEffect, useState } from "react";
import {Button, Card} from 'react-bootstrap';
import firebase, {db, auth, fire} from '../Fire'



export default function Post( {writeNewPost} ) {
    // console.log('user', user);

    return (
        <div>
            
            <div>
            <form onSubmit={e => writeNewPost(e)}>
                <label htmlFor="title">Email</label>
                <input type="title" name="title" placeholder="email" />
                <label htmlFor="text">Password</label>
                <input type="text" name="text"/>
                <button>Log In</button>
            </form>
        </div>
            

              
            
        </div>
 );
}





            