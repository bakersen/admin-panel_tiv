import React from 'react';
import { useAuth } from 'oidc-react';
import "./App.css";



function LoggedIn() {
  const auth = useAuth();
  console.log(auth)

  if (auth && auth.userData) {// User is loggedin 
    return (
      <div>
        
        <br />
        <button className="login" onClick={() => auth.signOut()}><text className='h3'>Sign Out</text></button>
      </div>
    );
  }
  return (
    <div>
      
      <br />
      <button className="login" onClick={() => auth.signIn()}><text className='h3'>Sign In</text></button>
    </div>
  );
}

export default LoggedIn;
