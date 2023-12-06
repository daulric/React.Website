import React from 'react';
import ReactDOM from 'react-dom/client';

import './css/index.css';
import './css/itemBox.css'
import './css/font.css'
import './css/navbar.css'

// CSS for The Different Pages
import './css/pages/daulric.css'
import './css/pages/404.css'

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);