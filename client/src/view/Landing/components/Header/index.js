import React, { useState } from "react";
import "./header.css";
import { Icon, Link, Box, Popover, Fade } from '@chakra-ui/react';

import { ReactComponent as WRLDIcon } from "../../../../assets/icon/wrld-icon-black.svg";
import { ReactComponent as GithubIcon } from "../../../../assets/icon/github-icon.svg";
import { ReactComponent as TwitterIcon } from "../../../../assets/icon/twitter-icon.svg";

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
            <div> <Navbar /> </div>
            <WRLDIcon color="primary"  viewBox="0 0 174 40" style={{ minWidth: 174, minHeight: 40 }} />
            <div className="landing-header-nav-wrap">
                <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                    <p className="landing-header-nav-text">Social</p>
                    <Popover className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/tree/main/client" target="_blank">
                                        <Icon color="primary" component={GithubIcon} />
                                        <p>GitHub</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/wrld_token" target="_blank">
                                        <Icon color="primary" component={TwitterIcon} />
                                        <p>Twitter</p>
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