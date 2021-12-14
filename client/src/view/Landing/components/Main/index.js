import React from "react";
import { Link } from '@chakra-ui/react';
import "./Main.css";
import WRLDIcon  from "../../../../assets/icon/LogoDesigne.png";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
            <img src={WRLDIcon} alt="World Protocol logo" />
            </div>

            <div className="landing-main-help-text-wrap">
                <p>WE HELP THE BRAVE BUILD SAFELY THEIR</p>
                <p>ASSETS WITH LEGENDARY COMPOUND</p>
                <p>INTEREST</p>
            </div>

            <div className="landing-main-btns-wrap">
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>HOW IT WORK</p>
                    </div>
                </Link>
                
                <Link href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>DOCUMENTATIONS</p>
                    </div>
                </Link>

                <Link href="" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>ENTRY TICKET</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Main;