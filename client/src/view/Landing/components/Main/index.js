import React from "react";
import { Link } from '@chakra-ui/react';
import "./Main.css";
// import img of logo

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <img alt="" />
            </div>

            <div className="landing-main-title-wrap">
                <p>World.Finance</p>
            </div>
            <div className="landing-main-help-text-wrap">
                <p>We help the daring, build and safe</p>
                <p>your legendary coumpounding interest</p>
            </div>

            <div className="landing-main-btns-wrap">
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Our team</p>
                    </div>
                </Link>
                
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Documentation</p>
                    </div>
                </Link>

                <Link href="" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>Entry ticket</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Main;