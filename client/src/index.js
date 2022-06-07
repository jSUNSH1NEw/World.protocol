import ReactDOM from "react-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from "notistack";
import { MoralisProvider } from "react-moralis"
import { MoralisDappProvider } from "./hooks/Web3ctxProvider/web3provider";

const appId = process.env.REACT_APP_MORALIS_APP_ID;
const serverUrlDev = process.env.REACT_APP_MORALIS_SERVER_URL_DEV;



const Application = () => {
    const isServerInfo = appId && serverUrlDev ? true : false;
    if (isServerInfo) 
        return (
        <MoralisProvider appId="appId" serverUrl="serverUrlDev">
        <MoralisDappProvider> 
           <SnackbarProvider>
             <App isServerInfo/>
            </SnackbarProvider>
        </MoralisDappProvider>
       </MoralisProvider>
    )
} ;
  
ReactDOM.render(
    // <React.StrictMode>
    <Application />,
    // </React.StrictMode>,
    document.getElementById("root")
  );
reportWebVitals();