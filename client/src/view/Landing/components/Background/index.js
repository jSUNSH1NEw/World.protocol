import React from "react";
import "./background.css";
import BlobsTop from "./img/back1.png";
import BlobCenter from "./img/back2.png";
import AppBar from '@mui/material/AppBar';


function Background() {
    return (
        <AppBar position="fixed">
        <div className="landing-background">
            <div className="landing-background-blobs-top">
                <img alt="" src={BlobsTop} />
            </div>
        </div>
        </AppBar>
    );
}

export default Background;