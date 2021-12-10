import { useEffect, useCallback } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Moralis } from "react-moralis"
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import landing from "./Root/Landing";"";

function App() {

  return (
    <landing/>

  );
}

export default App;
