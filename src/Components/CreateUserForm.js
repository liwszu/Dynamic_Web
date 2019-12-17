import React from 'react';
// const firebase = require('firebase/app');
// require("firebase/firestore");

export default function CreateUserForm({ submitFunction }) {
    return (
        <div>
            <form onSubmit={e => submitFunction(e)}>
                <label htmlFor="createName">Name</label>
                    <input type="name" name="createEmail" placeholder="email" className="textInput" />
                <label htmlFor="createEmail">Email</label>
                    <input type="email" name="createEmail" placeholder="email" className="textInput" />
                <label htmlFor="createPassword" className="authText">Password</label>
                    <input type="password" name="createPassword" className="textInput" />
                <button>Sign Up</button>
            </form>
        </div>
 );
}