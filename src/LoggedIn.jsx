import React from 'react';
import { useAuth } from 'oidc-react';




function LoggedIn() {
  const auth = useAuth();
  console.log(auth)

  if (auth && auth.userData) {// User is loggedin 
    return (
      <div>
        <strong>Logged In! 🎉</strong>
        <br />
        <button onClick={() => auth.signOut()}>Log Out!</button>
      </div>
    );
  }
  return (
    <div>
      <strong>Logged Out! 🎉</strong>
      <br />
      <button onClick={() => auth.signIn()}>Log In!</button>
    </div>
  );
}

export default LoggedIn;
