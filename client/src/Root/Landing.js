import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useWeb3Context } from "../hooks";
import { loadAppDetails } from "../store/slices/app-slice";
import Landing from "../views/Landing";
import "./style.scss";

function App() {
    return <Landing />;
}

export default App;