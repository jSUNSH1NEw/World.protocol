import * as React from 'react';
import {AppBar, Box, CssBaseline, Divider, Drawer,IconButton, List, Toolbar, Typography, Accordion, AccordionSummary, AccordionDetails, Button} from '@mui/material';
import { Link, Routes, Route } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from '../Dashboard/index.js';
import Calculator from '../Calculator/index.js';
import Stake from '../Stake/index.js';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WRLDIcon from "../../../../assets/icon/coin.png";
import './drawer.css';

const drawerWidth = 240;



function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const Sidebar = (
        <div className='Sidebar'>
            <Toolbar />
            <img className='logos' src={WRLDIcon} />   
            <List>
                <Button>
                    <Link to="dashboard">
                        <Typography>Dashboard</Typography>
                    </Link>{" "}
                </Button>
            </List>

            <Divider />
            <List>
            <Button>
                    <Link to="Calculator">
                        <Typography>Calculator</Typography>
                    </Link>
            </Button>
            </List>
            <Divider />
            <List>
                <Button>
                    <Link to="stake">
                        <Typography>Stake</Typography>
                    </Link>
                </Button>
            </List>
            <Divider />
            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Mint</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    </AccordionDetails>
                    <AccordionDetails>
                    <Link to="wavelp">
                        <Typography>wAVE / WRLD </Typography>
                    </Link>
                    </AccordionDetails>
                </Accordion>
            </List>

            <List>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Documentations</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Link to=""> 
                        <Typography>
                            Gitbooks
                        </Typography>
                        </Link>
                    </AccordionDetails>
                    <AccordionDetails>
                        <Link to=""> 
                        <Typography>
                            Our github readme
                        </Typography>
                        </Link>
                    </AccordionDetails>
                </Accordion>
            </List>
            
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className='routedSideAppbar'>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundColor:'rgba(255,255,255,0.0) ',
                }}
            >
                
                <Toolbar sx={{ display:'spaceBetween'}}>
                    <IconButton
                        color="inherit"
                        aria-label="open Sidebar"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon sx={{ color: 'black'}} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div"
                    sx={{ color:'black' }}>
                         # Name of the component
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
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
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {Sidebar}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {Sidebar}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
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
        </div>

    );
}


export default ResponsiveDrawer;