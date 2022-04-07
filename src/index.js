import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Web3ReactProvider } from '@web3-react/core'
import { ethers } from "ethers";
import { Provider } from 'react-redux'
import {createStore} from 'redux'
import summonerDataReducers from './reducers/summonerDataReducers.js'
import { configureStore } from '@reduxjs/toolkit'

const getLibrary = (provider) => {
  return new ethers.providers.Web3Provider(provider)
}

const store = configureStore({  reducer: {summoners:summonerDataReducers},})


const container = document.getElementById('root');
const root = createRoot(container);


root.render(
    <React.StrictMode>
      <Provider store={store}>
        <Web3ReactProvider getLibrary={getLibrary}>
          <App />
        </Web3ReactProvider>
      </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
