import React from 'react';
import CreateUserForm from '../../components/CreateUserForm';


export default function Signup({ signupFunction }) {
    return (
        <div>
            <h1>Signup</h1>
            <CreateUserForm submitFunction={signupFunction} />
        </div>
 )
}