import logo from './logo.svg';
import './App.css';
import React from 'react';
// import TagManager from 'react-server-side-gtm'
import { useGTMDispatch } from '@elgorditosalsero/react-gtm-hook'

function App() {
  const sendDataToGTM = useGTMDispatch();
  const handleClick = () => sendDataToGTM({ event: 'addToCart', productId: 'iniproductid', productName: 'iniproductname' });
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
        <button onClick={handleClick}>
          send to GTM
        </button>
      </header>
    </div>
  );
}

export default App;
