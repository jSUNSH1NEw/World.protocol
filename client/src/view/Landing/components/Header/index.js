import React, { useState } from "react";
import "./header.css";
import { Icon, Link, Box, Popover, Fade } from '@chakra-ui/react';

import { ReactComponent as WRLDIconss } from "../../../../assets/icon/WRLD-white.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icon/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icon/twitter-icon.svg";

import WRLDIcon from "../../../../assets/icon/coin.png";

// BY component={} in SvgIcon, it will render the SVG file as a React component.
// https://chakra-ui.com/docs/svg-icon

import Navbar from '../../../../components/NavBar';

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

                <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                <p className="landing-header-nav-text">ROADMAP</p>
                <p className="landing-header-nav-text">OUR TEAM</p>
                    <p className="landing-header-nav-text">SOCIAL</p>
                    <Popover className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/tree/main/client" target="_blank">
                                        <Icon color="primary" component={GithubIcon} />
                                        <p>GITHUB</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/wrld_token" target="_blank">
                                        <Icon color="primary" component={TwitterIcon} />
                                        <p>TWITTER</p>
                                    </Link>
                                </div>
                            </Fade>
                        )}
                    </Popover>
                </Box>
            </div>
        </div>
    );
}

export default Header;