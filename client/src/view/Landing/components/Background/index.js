import React from "react";
import "./background.css";
import BlobsTop from "./img/back1.png";
import BlobCenter from "./img/back2.png";


function Background() {
    return (
       
        <div className="landing-background">
            <div className="landing-background-blobs-top">
                <img alt="" src={BlobsTop} />
            </div>
        </div>
        
    );
}

export default Background;