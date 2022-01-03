import BlobsTop from "./img/back1.png";
import BlobCenter from "./img/back2.png";

import { LandingBack, LandingBackBlob, LandingBlobImg } from "./background.styles";

function Background() {
    return (
       
        <LandingBack>
            <LandingBackBlob className="landing-background-blobs-top">
                <LandingBlobImg alt="" src={BlobsTop} />
            </LandingBackBlob>
        </LandingBack>
        
    );
}

export default Background;