import { useEffect, useCallback } from "react";
import { Route, Redirect, Switch, useLocation } from "react-router-dom";
import { Moralis } from "react-moralis"
import './assets/css/App.css';
import Landing from "./Root/Landing";

function App() {

  return (
    <Landing></Landing>

  );
}

export default App;
