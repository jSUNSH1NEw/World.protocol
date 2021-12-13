import { useEffect, useCallback } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Moralis } from "react-moralis"
import './assets/css/App.css';
import Landing from "./view/Landing/landing";
import Header from "./view/Landing/components/Header/index.js";  
import Main from "./view/Landing/components/Main/index.js";


function App() {

  return (
    <div className="App">
    <Landing />
    </div>
  );
}

export default App;
