import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain="dev-cal12eatdzs3rctf.us.auth0.com"
    clientId="za8sc5BBR0STVGtMug37tjfTHzXWxsTX"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}>
    
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
    </Auth0Provider>
  
);


