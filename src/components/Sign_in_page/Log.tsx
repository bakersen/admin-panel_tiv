import React from 'react';
import { AuthProvider } from 'oidc-react';
import logo from './My_Village_Logo-01.png';
import './App.css';
import LoggedIn from './LoggedIn';
import { render } from '@testing-library/react';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';






const oidcConfig = {
  onSignIn: async (user: any) => {
    
    //alert('You just signed in, congratz! Check out the console!');
    console.log(user);
    // window.location.hash = '';
  },
 


  
  authority: 'https://accounts.google.com',
  clientId:
    '1098545537010-r340hkl2vechodmdca6oh4met2fq0krv.apps.googleusercontent.com',
  responseType: 'id_token',
  redirectUri:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/'
      : 'https://cobraz.github.io/example-oidc-react',
  post_logout_redirect_uri: 'https://localhost:3000/',
  
};

function App() {
  return (
    <AuthProvider {...oidcConfig}>
      <div className="App">
        <body className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome to My Village Admin-Panel</p>
          <LoggedIn />
        </body>
      </div>
    </AuthProvider>
  );
}

export default App;
