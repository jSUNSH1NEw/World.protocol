import React, { useState } from "react";
import "./header.scss";
import { SvgIcon, Link, Box, Popper, Fade } from '@chakra-ui/react';

//ADD SVG LOGO ICONS import { ReactComponent as WRLDIcon } from "../../../../assets/icons/wrld-icon.svg";
//ADD SOCIA GITHUB ICONS import { ReactComponent as GithubIcon } from "../../../../assets/icons/github-icon.svg";
//ADD SOCIAL TWITTER ICONS import { ReactComponent as TwitterIcon } from "../../../../assets/icons/twitter-icon.svg";

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
            <SvgIcon color="primary" component={} viewBox="0 0 174 40" style={{ minWidth: 174, minHeight: 40 }} />
            <div className="landing-header-nav-wrap">
                <Box component="div" onMouseEnter={e => handleClick(e)} onMouseLeave={e => handleClick(e)}>
                    <p className="landing-header-nav-text">Social</p>
                    <Popper className="landing-header-poper" open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={200}>
                                <div className="tooltip">
                                    <Link className="tooltip-item" href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/tree/main/client" target="_blank">
                                        <SvgIcon color="primary" component={} />
                                        <p>GitHub</p>
                                    </Link>
                                    <Link className="tooltip-item" href="https://twitter.com/wrld_token" target="_blank">
                                        <SvgIcon color="primary" component={} />
                                        <p>Twitter</p>
                                    </Link>
                                </div>
                            </Fade>
                        )}
                    </Popper>
                </Box>
            </div>
        </div>
    );
}

export default Header;