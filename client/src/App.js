import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./view/Landing/landing";
import CreatePassport from "./view/NftsPassport/createPassport/passport";
import BuyPassport from "./view/NftsPassport/buyPassport/buyPassport";
import AlreadyHave from "./view/NftsPassport/buyPassport/havePassport";
//import HavePassport from "./view/havePassport/havePassport";
import Dashboard from "./view/dappDashboard/dashboard";
import P404 from "./view/404/404";

import './assets/css/index.css';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/createPassport" element={<CreatePassport />} />
          <Route path="/getPassport" element={<BuyPassport />} />
          <Route path="/havePassport" element={<AlreadyHave />} />
          <Route path="/app/*" element={<Dashboard />} />
          <Route path="/*" element={<P404 />} />
        </Routes>
      </Router>
  );
}

export default App;
