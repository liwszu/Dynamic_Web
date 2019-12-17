import React from "react";

export default function LoginForm({ loginFunction }) {
    return (
 
        <div>
            <form onSubmit={e => loginFunction(e)}>
                <label htmlFor="loginEmail">Email</label>
                <input type="email" name="loginEmail" placeholder="email" className="textInput" />
                <label htmlFor="loginPassword">Password</label>
                <input type="password" name="loginPassword" class="textInput"/>
                <button className = "authButton" >Log In</button>
            </form>
        </div>
 );
}
