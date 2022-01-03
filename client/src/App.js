import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./view/Landing/landing";
import Entryticket from "./view/Entry/entry";
import BuyContract from "./view/BuyContract/buyContracts";
import Dapps from "./view/dappDashboard/dashboard";

import './assets/css/index.css';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/entryContract" element={<Entryticket />} />
          <Route path="/buyContract" element={<BuyContract />} />
          <Route path="/app/*" element={<Dapps />} />
        </Routes>
      </Router>
  );
}

export default App;
