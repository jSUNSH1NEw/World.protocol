import React, { Component } from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from "notistack";
import { MoralisProvider } from "react-moralis"
import { BrowserRouter } from "react-router-dom";

const appId = process.env.REACT_APP_MORALIS_APP_ID;
const serverUrlDev = process.env.REACT_APP_MORALIS_SERVER_URL_DEV;



export default class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.StrictMode>
        <MoralisProvider appId="appId" serverUrl="serverUrl">
         <BrowserRouter>
           <SnackbarProvider>
             <App />
            </SnackbarProvider>
          </BrowserRouter> 
       </MoralisProvider>
      </React.StrictMode>
    );
  }
}
reportWebVitals();