import React from 'react';


export default function Header({loggedIn, logoutFunction}) {

    return (
        <header className = "Header">
            <nav>
            {loggedIn && <a href="/">Home</a>}
            {!loggedIn && <a href="/login">Login</a>}
            {!loggedIn && <a href="/signup">Sign Up</a>}
            {loggedIn && <a href="/" onClick={() => logoutFunction()}>Log Out</a>}
            </nav>
        </header>
    );
}