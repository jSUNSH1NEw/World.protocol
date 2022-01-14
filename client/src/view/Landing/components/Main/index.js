import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";

//Component import 
import WRLDIcon  from "../../../../assets/icon/LogoDesigne.png";
import Card from "./components/Card/Card.jsx";
import TimeLine from "./components/timeLine.jsx";

// CSS import 
import "./Main.css";

  
function Main() {

    return (
        <div className="landing-main">
            <Tilt
                 tiltMaxAngleX={35}
                 tiltMaxAngleY={35}
                 perspective={900}
                 scale={1.2}
                 transitionSpeed={2000}
                 gyroscope={true}
            >
            <div className="landing-main-img-wrap">
            <img src={WRLDIcon} alt="World Protocol logo" />
            </div>
            </Tilt>

            <div className="landing-main-help-text-wrap">
                <p>WE HELP THE BRAVE BUILD SAFELY THEIR</p>
                <p>ASSETS WITH LEGENDARY COMPOUND</p>
                <p>INTEREST</p>
            </div>

            <div className="landing-main-btns-wrap">
                <a href="https://weertz-joffrey.gitbook.io/world.protocol/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>DOCUMENTATIONS</p>
                    </div>
                </a>
                
                <a href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/blob/main/README.md" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>README</p>
                    </div>
                </a>
                    
                    <div className="landing-main-btn">
                    <Link to="/createPassport"> <p>ENTRY TICKET</p> </Link>
                    </div>
                    
                
            </div>

            <div className="titleText">
                <p>Our team</p>
            </div>
            <div className="landing-main-card-wrap">
                <Card />
            </div>

            <h2 className="titleText">
                Why World.protocol exist
            </h2>

            <div className="landing-main-btns-wrap">
                <div className="landing-main-help-text-wrap">
                    <h4 className="titleText">
                    For financial freedom  
                    </h4>
                    <p className="someText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur, nisi
                    </p>
                </div>
                <div className="landing-main-help-text-wrap">
                    <h4 className="titleText">
                        For security purpose
                    </h4>
                    <p className="someText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur, nisi
                    </p>
                </div>
                <div className="landing-main-help-text-wrap">
                    <h4 className="titleText">
                        For get community ruled 
                    </h4>
                    <p className="someText">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec euismod, nisl eget consectetur consectetur, nisi
                    </p>
                </div>
            </div>

            <div className="titleText">
                <p>Our roadmap</p>
            </div>
            <div className="landing-main-roadmap-wrap">
                <TimeLine />
            </div>


                
        </div>
    );
}

export default Main;


