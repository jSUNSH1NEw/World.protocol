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
                <a href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>HOW IT WORK</p>
                    </div>
                </a>
                
                <a href="https://WorldMillions.gitbook.io/WorldFinance/" target="_blank" rel="noreferrer">
                    <div className="landing-main-btn">
                        <p>DOCUMENTATIONS</p>
                    </div>
                </a>
                    
                    <div className="landing-main-btn">
                    <Link to="/entryContract"> <p>ENTRY TICKET</p> </Link>
                    </div>
                    
                
            </div>

            <div className="Team-title">
                <p>Our team</p>
            </div>
            <div className="landing-main-card-wrap">
                <Card />
            </div>

            <div className="roadmap-title">
                <p>Roadmap</p>
            </div>
            <div className="landing-main-roadmap-wrap">
                <TimeLine />
            </div>


                
        </div>
    );
}

export default Main;


