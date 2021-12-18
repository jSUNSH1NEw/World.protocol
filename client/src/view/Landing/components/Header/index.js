import React, { useState } from "react";
import "./header.css";

import WRLDIcon from "../../../../assets/icon/coin.png";

// BY component={} in SvgIcon, it will render the SVG file as a React component.
// https://chakra-ui.com/docs/svg-icon


function Header() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e) => {
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };

    const open = Boolean(anchorEl);

    return (

        <div className="landing-header">
            <div>  </div>
            <img src={WRLDIcon} className="landing-header-logo" alt="logo" />
            <div className="landing-header-nav-wrap">

                <div component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                <p className="landing-header-nav-text">ROADMAP</p>
                <p className="landing-header-nav-text">OUR TEAM</p>
                    <p className="landing-header-nav-text">SOCIAL</p>
                    <div className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                       {({ TransitionProps }) => (
                            <div {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    
                                    <link className="tooltip-item" href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/tree/main/client" target="_blank">
                                        <icon color="primary"  />
                                        <p>GITHUB</p>
                                    </link>
                                    <link className="tooltip-item" href="https://twitter.com/wrld_token" target="_blank">
                                        <img color="primary" />
                                        <p>TWITTER</p>
                                    </link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;