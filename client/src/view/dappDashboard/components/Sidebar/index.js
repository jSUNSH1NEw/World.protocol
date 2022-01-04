import * as React from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer,IconButton, List, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails, Button} from '@mui/material';
import { Link, Routes, Route } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from '../Dashboard/index.js';
import Calculator from '../Calculator/index.js';
import Stake from '../Stake/index.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WRLDIcon from "../../../../assets/icon/coin.png";
import { size } from '../../styleHook';
import { StyledImg, StyledDiv, StyledLink, StyledLi} from './drawer.style';
import { styled } from '@mui/material/styles';
import FontStyles from '../../../../assets/css/fontStyles.js';


export const LinkedThemed= styled(Link)(({ theme }) => ({
    margin: theme.spacing(1),
    display: 'flex',
    alignItems: 'Left',
    padding: theme.spacing(0, 5),
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    textDecoration: 'none',
    fontFamily: 'Montserrat Regular',
    fontStyle: 'normal',
    fontWeight: '420',
    fontSize: '17px',
    lineHeight: '22px',
    color:'rgb(0, 0, 0)',

    '&:hover': {
        textDecoration: 'underline',
        Transition: 'all 1.8s ease-in-out',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
      },
  }));

  export const LinkedDown = styled(List)(({ theme }) => ({
    display: 'flex',
    alignItems: 'Left',
    padding: theme.spacing(0, 4),
    justifyContent: 'flex-start',
    textTransform: 'capitalize',
    textDecoration: 'none',
    fontFamily: 'Montserrat Regular',
    fontStyle: 'normal',
    fontWeight: '300',
    fontSize: '15px',
    lineHeight: '22px',
    color:'rgb(0, 0, 0)',

  }));

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Sidebar = (
        <div>
            <Toolbar />
            <StyledImg className='logos' src={WRLDIcon}  alt="Icon of World protocol in the Dapps of world protocol" />   
            <Divider sx={{ marginBottom: '50px'}} />
            <List>

                    <LinkedThemed to="dashboard">
                        <Typography >dashboard</Typography>
                    </LinkedThemed>

            </List>
            <List>
                    <LinkedThemed to="Calculator">
                        <Typography >calculator</Typography>
                    </LinkedThemed>
            </List>
            <List>
                    <LinkedThemed to="Stake">
                        <Typography >stake</Typography>
                    </LinkedThemed>
            </List>
            <List>
                    <LinkedThemed to="personnalWallet">
                        <Typography >Personnal Wallet</Typography>
                    </LinkedThemed>
            </List>
            <List>
                <Accordion sx={{boxShadow:'none'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content">
                         <LinkedDown>
                            <Typography>Mint</Typography>
                        </LinkedDown>
                    </AccordionSummary>

                    <AccordionDetails sx={{display:'flex', justifyContent:'flex-start', marginLeft: '32px' }}>
                    <StyledLink to="wavelp">
                        <Typography>wAVE / WRLD </Typography>
                    </StyledLink>
                    </AccordionDetails>
                </Accordion>
            </List>

            <List>
                <Accordion sx={{boxShadow:'none'}}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <LinkedDown>
                            <Typography>Documentations</Typography>
                        </LinkedDown>
                    </AccordionSummary>
                    <AccordionDetails sx={{display:'flex', justifyContent:'flex-start', marginLeft: '32px' }}>
                        <StyledLi href="https://weertz-joffrey.gitbook.io/world.protocol/" target="_blank"> 
                            <Typography>
                                Gitbooks
                            </Typography>
                        </StyledLi>
                    </AccordionDetails>
                    <AccordionDetails sx={{display:'flex', justifyContent:'flex-start', marginLeft: '32px' }}>
                        <StyledLi href="https://github.com/jSUNSH1NEw/MoralisAvalanchehackathon/blob/main/README.md" target="_blank"> 
                            <Typography>
                                GitHub Readme
                            </Typography>
                        </StyledLi>
                    </AccordionDetails>
                </Accordion>
            </List>
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <StyledDiv>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${size.width}px)` },
                    ml: { sm: `${size.width}px` },
                    backgroundColor:'rgba(255,255,255,0.0) ',
                    
                }}
            >
                
                <Toolbar sx={{ backgroundColor:'black', zIndex: (theme) => theme.zIndex.drawer + 1}}>
                    <IconButton
                        color="inherit"
                        aria-label="open Sidebar"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'white'}} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div"
                    sx={{ color:'white', alignItems:'center', justifyItems:'flex-end', fontFamily: 'Montserrat Bold', }}>
                         $greeting + $username 
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: size.width }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: size.width },
                        
                    }}
                >
                    {Sidebar}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: size.width },
                    }}
                    open
                >
                    {Sidebar}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${size.width}px)` } }}
            >
                <Toolbar />
            </Box>
        </Box>

        <Box className='routerDrawer'> 
            <Routes>
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
            <Routes>
                <Route path="calculator" element={<Calculator />} />
            </Routes>
            <Routes>
                <Route path="stake" element={<Stake />} />
            </Routes>
        </Box>
        </StyledDiv>

    );
}


export default ResponsiveDrawer;