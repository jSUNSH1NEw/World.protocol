import { useEffect, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './assets/css/index.css';
import Landing from "./view/Landing/landing";
import Entryticket from "./view/Entry/entry";

//import entry ticket and 
// create route <Route path="/entryTicket" component={Entryticket} />


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/entryTicket" element={<Entryticket />} />
        </Routes>
      </Router>
  );
}

export default App;
