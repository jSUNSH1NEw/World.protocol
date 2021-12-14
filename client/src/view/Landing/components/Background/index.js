import React from "react";
import "./background.css";
import BlobsTop from "../../../../assets/icon/back1.png";
import BlobCenter from "../../../../assets/icon/back2.png";

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