import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { NavContextProvider } from './store/nav-context';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavContextProvider>
        <App />
      </NavContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
