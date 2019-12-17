import React from 'react'
import LoginForm from "../../components/LoginForm"

export default function Login({updatesPosted}) {
  return(
    <div>
      <EditProfile submitFunction={updatesPosted} />
    </div>

  );

}