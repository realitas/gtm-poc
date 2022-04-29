import logo from './logo.svg';
import './App.css';
import React from 'react';
// import TagManager from 'react-server-side-gtm'
import { GTMProvider, useGTMDispatch } from '@elgorditosalsero/react-gtm-hook'

function App() {
  const gtmParams = { id: 'GTM-NVT435R' }
  const sendDataToGTM = useGTMDispatch()

  const handleClick = () => sendDataToGTM({ event: 'addToCart', productId: 'iniproductid', productName: 'iniproductname' })

  // callGtm = () => {
  //   const tagManagerArgs = {
  //       dataLayer: {
  //           userId: '001',
  //           userProject: 'project',
  //           page: 'home'
  //       },
  //       dataLayerName: 'PageDataLayer'
  //   }
  //   TagManager.dataLayer(tagManagerArgs)

  //   // dataLayer.push({
  //   //   'event': 'gtm-event',
  //   //   'gtm-event-category': 'GTM',
  //   //   'gtm-event-action': 'GTM',
  //   //   'gtm-event-label': 'GTM'
  //   // });
  // }

  return (
    <GTMProvider state={gtmParams}>
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
    </GTMProvider>
  );
}

export default App;
