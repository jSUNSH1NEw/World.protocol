import { useEffect, useCallback } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Moralis } from "react-moralis"
import './assets/css/index.css';
import Landing from "./view/Landing/landing";


function App() {

  return (
    <Landing />
  );
}

export default App;
