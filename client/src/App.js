import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Landing from "./view/Landing/landing";
import CreatePassport from "./view/createPassport/passport";
import BuyPassport from "./view/buyPassport/buyPassport";
//import HavePassport from "./view/havePassport/havePassport";
import Dapps from "./view/dappDashboard/dashboard";

import './assets/css/index.css';

function App() {

  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/createPassport" element={<CreatePassport />} />
          <Route path="/getPassport" element={<BuyPassport />} />
          <Route path="/app/*" element={<Dapps />} />
        </Routes>
      </Router>
  );
}

export default App;
