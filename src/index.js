import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { AuthProvider } from './context/authContext'

import './index.css'
import "bootswatch/dist/lux/bootstrap.min.css";

ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  document.getElementById('root')
);
