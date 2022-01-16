import Tilt from 'react-parallax-tilt';
import { Link } from "react-router-dom";

//Component import 
import WRLDIcon  from "../../../../assets/icon/LogoDesigne.png";
import Card from "./components/Card/Card.jsx";
import TimeLine from "./components/timeLine.jsx";

import { styled } from '@mui/material/styles';
import { Box, Paper, Grid } from "@mui/material";

import ReceiptIcon from '@mui/icons-material/Receipt';
import PublicIcon from '@mui/icons-material/Public';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

// CSS import 
import "./Main.css";


const Text = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: "white",
    backgroundColor: "rgba(0,0,0,0.0)",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: "22px",
    marginTop: "100px",
    marginBottom: "4px",
  
  }));
const TextTittle = styled(Paper)(({ theme }) => ({
    ...theme.typography.title,
    textAlign: 'center',
    backgroundColor: "rgba(0,0,0,0.0)",
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "22px",
    marginTop: "100px",
    marginBottom: "4px",
  
  }));

  
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
                How it works
            </h2>
            <Box sx={{ flexGrow: 1, mb:40}}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 4, lg:4 }} columns={12}>
               <Grid item xs={12} sm={12} md={4} lg={4} direction="column" justifyContent="center" alignItems="center">
                   <TextTittle>Buy a TWRLD Passport</TextTittle>
                   <Text> 
                        By buying a TWRLD Passport you will become a citizen of world.protocole
                        who get some part of the "TWRLD locked treasury", which is a DAO locked treasury 
                        that is used to buy/sell WRLD.
                   </Text>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
                   <TextTittle >Enter in the WRLD dapps</TextTittle>
                   <Text> 
                        You can enter in the WRLD dapps by using your passport.
                        the will give you access to the dapps. Where you can make legendary
                        staking/minting interest.
                   </Text>
               </Grid>
               
               <Grid item xs={12} sm={12} md={4} lg={4}>
                   <TextTittle >Make benefits</TextTittle>
                    
                   <Text> 
                    We expect to become the first entity locked bond,
                    with a Decentralized Autonomous Organization parameter 
                   </Text>
                </Grid>
            </Grid>
        </Box>

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


