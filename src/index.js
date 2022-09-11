import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';
import Cartcontext from './context/Cartcontext';
import UseAuthContext from './context/UseAuthContext';
import { CookiesProvider } from 'react-cookie';
import AuthContextProvider from './context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <Cartcontext>
        <UserContextProvider>
          <UseAuthContext>
            <CookiesProvider>
              <App />
            </CookiesProvider>
          </UseAuthContext>
        </UserContextProvider>
      </Cartcontext>
    </AuthContextProvider>
  </BrowserRouter>
);

