import React from "react";
import "./landing.css";
import Header from "./components/Header/index.js";
import Footer from "./components/Footer";
import Main from "./components/Main/index.js";
import Background from "./components/Background/index.js";

function Landing() {
    return (
        <div className="landing-root">
            <Header />
            <Main />
            <Background />
        </div>
    );
}

export default Landing;