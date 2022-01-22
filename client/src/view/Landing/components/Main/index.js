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


const TextTittleN = styled(Paper)(({ theme }) => ({
    ...theme.typography.title,
    textAlign: 'center',
    border: "none",
    backgroundColor: "rgba(0,0,0,0.0)",
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "22px",
    marginTop: "22px",
    marginBottom: "1px",
    boxShadow: "none",
  }))

  const TextTittle = styled(Paper)(({ theme }) => ({
    ...theme.typography.title,
    textAlign: 'center',
    border: "none",
    backgroundColor: "rgba(0,0,0,0.0)",
    color: "white",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "bold",
    fontSize: "25px",
    lineHeight: "22px",
    marginTop: "22px",
    marginBottom: "1px",
    boxShadow: "none",
    media: {
        [theme.breakpoints.down('sm')]: {
            fontSize: "20px",
            lineHeight: "20px",
            marginTop: "20px",
            marginBottom: "1px",
        },
    },
  }))

const Text = styled(Paper)(({ theme }) => ({
    ...theme.typography.body1,
    textAlign: 'center',
    color: "white",
    backgroundColor: "rgba(0,0,0,0.0)",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "18px",
    marginTop: "50px",
    marginBottom: "4px",
    boxShadow: "none",
  }));

  
const StyledHr = styled(Paper)(({ theme }) => ({
    width: "50%",
    display: "block",
    //make in center
    marginLeft: "auto",
    marginRight: "auto",
    border: "0.5px",
    borderColor: "#487C89",
    height: "1px",
    marginTop: "11px",
    marginBottom: "11px",
    boxShadow: "2px 2px 2px #487C89",

    }))


  
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
            What do we have to offer you
            </h2>
            <Box sx={{ flexGrow: 1, mb:20, ml: 8, mr:8, display: 'flex' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 6, sm: 6, md: 4, lg:4 }} columns={12}>
               <Grid item xs={12} sm={12} md={4} lg={4} direction="column" justifyContent="center" alignItems="center">
                    <TextTittleN >1.</TextTittleN>
                    <TextTittle>More investment security</TextTittle>
                    <StyledHr/>
                    <Text> 
                        TWRLD Passport. Will secure the sending of your investment to the right address.
                        You will also feed the TWRLD treasury with the mint of our passport 
                        and at the same time get the right to vote as a citizen 
                        of the World Protocol on a certain part of the TWRLD treasury.
                    </Text>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4}>
                   <TextTittleN>2.</TextTittleN>
                   <TextTittle >Regulate the market </TextTittle>
                   <StyledHr/>
                   <Text> 
                        TWRLD treasury will be used to regulate the market of wrld.
                        50% of it locked into the  treasury of WRLD that is used to buy/sell WRLD.
                        The remaining 50% will be used according to the saissonal vote of our DAO community having a passport for
                   </Text>
               </Grid>

               <Grid item xs={12} sm={12} md={4} lg={4} sx={{ justifyContent: 'flex-end' }}>
                <TextTittleN >3.</TextTittleN>
                <TextTittle >Creates financial freedom</TextTittle>
                <StyledHr/>
                   <Text> 
                    By Making legendary staking/minting compounding interest.
                    With the wAVE (Staked WRLD) or the WRLD/AVAX LP
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


