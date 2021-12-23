import { useEffect, useRef, useState, useImperativeHandle, forwardRef  } from "react";
import { gsap } from "gsap";
import Tilt from 'react-parallax-tilt';
import { styled } from '@mui/material/styles';
import { Paper } from "@mui/material";
import { Link } from 'react-router-dom';

//Component import 
import WRLDIcon  from "../../../../assets/icon/LogoDesigne.png";
import Card from "./components/Card/Card.jsx";
import TimeLine from "./components/timeLine.jsx";

// CSS import 
import "./Main.css";


// CSS rules over styled with MUI 
const Linked = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    fontFamily: 'Montserrat Bold',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '22px',
    color:'rgb(0, 0, 0)',
  }));
  
function Main() {

    // GSAP animation TESTING

  // store a reference to the box div
 // const boxRef = useRef();
  // wait until DOM has been rendered
 // useEffect(() => {
   // gsap.to(boxRef.current, { rotation: "+=360" });
  //});
  // with this  <div className="box" ref={boxRef}>Hello</div> <!--- 

   // const navigate = useNavigate();


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
                    <Link to="/entry"> <p>ENTRY TICKET</p> </Link>
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


