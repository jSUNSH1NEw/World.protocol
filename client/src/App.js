import { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./view/Landing/landing";
import Entryticket from "./view/Entry/entry";
import BuyContract from "./view/BuyContract/buyContracts";

import './assets/css/index.css';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/entryContract" element={<Entryticket />} />
          <Route path="/buyContract" element={<BuyContract />} />
        </Routes>
      </Router>
  );
}

export default App;
