import React from "react";
import { Link } from '@chakra-ui/react';
import "./Main.css";
import { ReactComponent as WRLDIcon } from "../../../../assets/icon/WRLD-white.svg";

function Main() {
    return (
        <div className="landing-main">
            <div className="landing-main-img-wrap">
                <WRLDIcon className="landing-main-title-icon" />
            </div>

            <div className="landing-main-help-text-wrap">
                <p>We help the brave build  safely their</p>
                <p>assets with legendary  compound</p>
                <p>interest</p>
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