import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook'

const gtmParams = { id: 'GTM-NVT435R' }

ReactDOM.render(
  <React.StrictMode>
    <GTMProvider state={gtmParams}>
    <App />
    </GTMProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
