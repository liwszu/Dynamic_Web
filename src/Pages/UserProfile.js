import React from "react";
import EditProfile from '../Components/EditProfile'

export default function UserProfile( {user} ) {
    console.log('user', user);

    return (
        // <EditProfile/>
        
        <div>
        {
            user &&
            
                
                <div>
                    <h2>{user.displayName}</h2>
                    <h2>{user.email}</h2>
                    <img src={user.photoURL}/>
                </div>
               
        }
        
        
            
              
            
        </div>
 );
}
