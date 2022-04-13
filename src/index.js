import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HeaderContextProvider } from './store/header-context';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <HeaderContextProvider>
        <App />
      </HeaderContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
