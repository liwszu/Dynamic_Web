import React from 'react';
import CreateUserForm from '../Components/CreateUserForm';


export default function Signup({ signupFunction }) {
    return (
        <div>
            <h1 >Signup</h1>
            <CreateUserForm className="authButton" submitFunction={signupFunction} />
        </div>
 )
}