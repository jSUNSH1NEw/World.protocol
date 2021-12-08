import logo from './logo.svg';
import './App.css';
import { Moralis } from "react-moralis"

function App() {
  const isWeb3Active = Moralis.ensureWeb3IsInstalled()
  if (isWeb3Active) {
    console.log("Active")
    return (
    <div>
      <h1>Web3 is instaled </h1>
      <h2>{Moralis.getAccount()}</h2>
    </div>
    )
  } else {
    await Moralis.enable()
  }



  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <isWeb3Active></isWeb3Active>
    </div>
  );
}

export default App;
