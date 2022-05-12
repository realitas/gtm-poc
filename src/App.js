import logo from './logo.svg';
import './App.css';
import React from 'react';
// import TagManager from 'react-server-side-gtm'
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook'

function App() {
  const sendDataToGTM = useGTMDispatch();
  const handleGeneralClick = () => sendDataToGTM({ event: 'addToCart', productId: 'iniproductid', productPrice: 'iniproductprice' });
  const handleMoeClick = () => sendDataToGTM({ event: 'moePurchase', product_name: ['name1', 'name2'] });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <button onClick={handleGeneralClick}>
          send to GTM General
        </button>
        <button onClick={handleMoeClick}>
          send to GTM Moe
        </button>
      </header>
    </div>
  );
}

export default App;
