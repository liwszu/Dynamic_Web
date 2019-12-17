import React from "react";


export function UserInformation({ email , name}) {

    return (
        <div>
            <div>Email: {email}</div>
            <div>Name: {name}</div>
        </div>
    )
    
}