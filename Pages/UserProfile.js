import React from "react";
import { UserInformation } from "../../Components/UserProfileComponents";

export default function UserProfile({ user }) {
    console.log('user', user);

    return (
        <div>
            <h1>User Profile for {user.uid && user.uid}</h1>
            <UserInformation email={user.email ? user.email : "whoops"} />
        </div>
 );
}
