import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import UserContextProvider from './context/UserContextProvider';
import Cartcontext from './context/Cartcontext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Cartcontext>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Cartcontext>
  </BrowserRouter>
);

