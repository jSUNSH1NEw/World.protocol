import Landing from "../view/Landing";
import { useEffect, useCallback } from "react";
import { Moralis, useMoralis } from "react-moralis"



function App() {
//    const { provider, chainID, connected } = useMoralis();

//const loadApp = useCallback(() => {
  //  if (provider && chainID && connected) {
        // Load app
  //      console.log("App loaded");  }
//}, [chainID, connected]);


//useEffect(() => {
  //  loadApp(provider);
//}, []);
//

    return <Landing />;
}

export default App;